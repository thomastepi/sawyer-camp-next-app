"use client";
import { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  FormHelperText,
  Image,
  Input,
  Text,
  Textarea,
  VStack,
  Heading,
  Alert,
  AlertIcon,
  SimpleGrid,
  Badge,
  Divider,
  Spinner,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import PageHeader from "@/components/pageHeader/pageHeader";
import { MAX_FILE_SIZE, ALLOWED_IMAGE_TYPES } from "@/constants/imageUpload";
import { analyzeImage } from "@/services/ai-lab/farm-doctor.service";

const FarmDoctorPage = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [description, setDescription] = useState("");
  const [diagnosis, setDiagnosis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) {
      return;
    }
    if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
      setError(
        "Unsupported file type. Please upload a PNG, JPEG, WEBP, or non-animated GIF image."
      );
      setImage(null);
      setPreview(null);
      e.target.value = null;
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      setError(
        "File size exceeds the 50 MB limit. Please upload a smaller image."
      );
      setImage(null);
      setPreview(null);
      e.target.value = null;
      return;
    }
    setError(null);
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async () => {
    if (!image) {
      setError("Please upload an image of the affected plant.");
      return;
    }

    setLoading(true);
    setError(null);
    setDiagnosis(null);

    try {
      const response = await analyzeImage(image, description);
      setDiagnosis(response[0].text);
    } catch (err) {
      console.error("Error:", err);
      setError(
        "An error occurred while getting the diagnosis. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <PageHeader
        title="Farm Doctor"
        image="https://ik.imagekit.io/thormars/Sawyer-Camp/plantain-banana.jpg"
      />

      <Container maxW="container.xl" py={16}>
        <VStack spacing={6} align="stretch" mb={10}>
          <Badge
            alignSelf="flex-start"
            colorScheme="green"
            borderRadius="full"
            px={3}
            py={1}
            fontSize="xs"
          >
            Farmer-focused AI
          </Badge>

          <Heading size="2xl" color="brand.900">
            AI-Powered Farm Doctor
          </Heading>

          <Text fontSize="lg" color="brand.800">
            Get quick, AI-assisted insights on crop health. Upload a photo of an
            affected plant, add a short description, and Farm Doctor will
            provide a probable diagnosis and actionable recommendations.
          </Text>

          <Text fontSize="sm" color="brand.700">
            <strong>Note:</strong> Farm Doctor is an assistant, not a
            replacement for an agronomist. Always double-check critical
            decisions with a local expert.
          </Text>

          <Divider borderColor="gray.200" />
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <VStack
            spacing={6}
            align="stretch"
            bg="white"
            borderWidth="1px"
            borderColor="gray.200"
            borderRadius="xl"
            boxShadow="md"
            p={{ base: 5, md: 6 }}
          >
            <Heading as="h2" size="md" color="brand.900">
              1. Upload & describe
            </Heading>

            <FormControl>
              <FormLabel color="brand.900">
                Upload a clear image of the affected plant
              </FormLabel>
              <Input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                p={1}
                focusBorderColor="brand.800"
              />
              <FormHelperText fontSize="sm" color="brand.700" mt={2}>
                Allowed types:{" "}
                {ALLOWED_IMAGE_TYPES.map((type) =>
                  type.split("/")[1].toUpperCase()
                ).join(", ")}
                . Max size: {MAX_FILE_SIZE / (1024 * 1024)} MB. Make sure the
                plant and symptoms are clearly visible.
              </FormHelperText>
            </FormControl>

            <FormControl>
              <FormLabel color="brand.900">
                Describe the issue (optional, but helpful)
              </FormLabel>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Example: Leaves started turning yellow 2 weeks ago. Soil is often wet. Maize crop, planted in early rainy season..."
                focusBorderColor="brand.800"
              />
              <FormHelperText fontSize="sm" color="brand.700">
                The more context you provide, the more precise the AI’s
                diagnosis can be.
              </FormHelperText>
            </FormControl>

            <Button
              colorScheme="green"
              onClick={handleSubmit}
              isLoading={loading}
              loadingText="Diagnosing..."
              size="lg"
              alignSelf="flex-start"
            >
              Get AI Diagnosis
            </Button>

            {error && (
              <Alert status="error" borderRadius="md">
                <AlertIcon />
                {error}
              </Alert>
            )}
          </VStack>

          <VStack spacing={6} align="stretch">
            {preview && (
              <Box
                bg="white"
                borderWidth="1px"
                borderColor="gray.200"
                borderRadius="lg"
                p={4}
                boxShadow="sm"
              >
                <Heading as="h2" size="md" mb={3} color="brand.900">
                  2. Image preview
                </Heading>
                <Box textAlign="center">
                  <Image
                    src={preview}
                    alt="Image preview"
                    maxH="320px"
                    mx="auto"
                    borderRadius="md"
                    objectFit="contain"
                  />
                </Box>
              </Box>
            )}

            <Box
              bg="white"
              borderWidth="1px"
              borderColor="gray.200"
              borderRadius="lg"
              p={6}
              boxShadow="sm"
              flex="1"
            >
              <Heading as="h2" size="md" mb={3} color="brand.900">
                3. Diagnosis & recommendations
              </Heading>

              {!diagnosis && !loading && (
                <Text fontSize="sm" color="brand.700">
                  Once you upload an image and click{" "}
                  <strong>Get AI Diagnosis</strong>, your results will appear
                  here with a probable diagnosis and next steps to help your
                  crops recover.
                </Text>
              )}

              {loading && (
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="brand.200"
                  color="brand.800"
                  size="xl"
                />
              )}

              {diagnosis && (
                <Box
                  mt={2}
                  align="stretch"
                  spacing={4}
                  sx={{
                    "& h2": {
                      fontSize: "xl",
                      fontWeight: "bold",
                      color: "brand.900",
                      mt: 4,
                      mb: 2,
                    },
                    "& p": {
                      color: "brand.800",
                      mb: 2,
                    },
                    "& ul": {
                      listStylePos: "inside",
                      ml: 4,
                    },
                    "& li": {
                      color: "brand.800",
                      mb: 1,
                    },
                    "& a": {
                      color: "brand.800",
                      textDecoration: "underline",
                      _hover: { color: "brand.900" },
                    },
                  }}
                  dangerouslySetInnerHTML={{ __html: diagnosis }}
                />
              )}
            </Box>
            <Button
              type="link"
              leftIcon={<ArrowBackIcon />}
              onClick={() => router.push("/ai-lab")}
              variant="outline"
              colorScheme="green"
            >
              Back to AI Lab
            </Button>
          </VStack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default FarmDoctorPage;
