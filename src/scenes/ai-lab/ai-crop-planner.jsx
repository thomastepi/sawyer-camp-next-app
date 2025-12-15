"use client";
import { useEffect } from "react";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
  Heading,
  Text,
  HStack,
  Tag,
  SimpleGrid,
  Divider,
  Spinner,
  Container,
} from "@chakra-ui/react";
import { InfoIcon, CheckCircleIcon, ArrowBackIcon } from "@chakra-ui/icons";
import PageHeader from "@/components/pageHeader/pageHeader";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setFormData, setLoadingText } from "@/redux/features/cropPlannerSlice";
import { handleSubmit } from "@/redux/features/cropPlannerSlice";
import loadingMessages from "@/data/cropPlannerLoadingMessages";

const AICropPlannerPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { formData, suggestion, loading, loadingText, error } = useSelector(
    (state) => state.aiCropPlanner
  );

  useEffect(() => {
    if (!loading) return;

    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % loadingMessages.length;
      dispatch(setLoadingText(loadingMessages[index]));
    }, 4000);

    return () => clearInterval(interval);
  }, [loading, dispatch]);

  const handleChange = (e) => {
    dispatch(setFormData({ ...formData, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = () => {
    try {
      dispatch(handleSubmit(formData));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Box>
      <PageHeader
        title="AI Crop Planner"
        image="https://ik.imagekit.io/thormars/Sawyer-Camp/plantain-banana.jpg"
      />

      <Container maxW="container.xl" py={16}>
        <HStack
          justify="space-between"
          align={{ base: "flex-start", md: "center" }}
          spacing={6}
          mb={10}
        >
          <VStack align="flex-start" spacing={3}>
            <Tag colorScheme="green" borderRadius="full" px={3} py={1}>
              AI-Powered Planning
            </Tag>
            <Heading as="h1" size="xl" color="brand.900">
              Plan smarter, plant with confidence
            </Heading>
            <Text fontSize="md" color="brand.800">
              Use AI to match your soil, location, farm size, and local demand
              with the most profitable crops for your farm. Spend less time
              guessing and more time growing.
            </Text>
          </VStack>

          <Box
            display={{ base: "none", md: "block" }}
            textAlign="right"
            minW="220px"
          >
            <Text fontSize="sm" color="brand.700">
              Season insights
            </Text>
            <Text fontWeight="semibold" color="brand.800">
              Get tailored crop ideas <br /> in just a few clicks.
            </Text>
          </Box>
        </HStack>

        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={10}
          alignItems="flex-start"
        >
          <Box
            as="form"
            onSubmit={(e) => {
              e.preventDefault();
              handleFormSubmit();
            }}
            bg="white"
            borderRadius="xl"
            borderWidth="1px"
            boxShadow="md"
            p={{ base: 5, md: 6 }}
          >
            <Heading size="md" mb={4} color="brand.900">
              Tell us about your field
            </Heading>
            <Text fontSize="sm" color="brand.700" mb={6}>
              These details help the AI suggest crops that fit your local
              conditions and market opportunities.
            </Text>

            <VStack spacing={4} align="stretch">
              <FormControl isRequired>
                <FormLabel htmlFor="soilType">Soil Type</FormLabel>
                <Select
                  id="soilType"
                  name="soilType"
                  placeholder="Select soil type"
                  value={formData.soilType}
                  onChange={handleChange}
                  focusBorderColor="brand.800"
                  borderColor="brand.700"
                >
                  <option value="sandy">Sandy</option>
                  <option value="clay">Clay</option>
                  <option value="loamy">Loamy</option>
                  <option value="Silty">Silty</option>
                  <option value="unknown soil type">Unknown soil type</option>
                </Select>
              </FormControl>

              <FormControl isRequired>
                <FormLabel htmlFor="waterAccess">Water Access</FormLabel>
                <Select
                  id="waterAccess"
                  name="waterAccess"
                  placeholder="Water Source"
                  value={formData.waterAccess}
                  onChange={handleChange}
                  focusBorderColor="brand.800"
                  borderColor="brand.700"
                >
                  <option value="rainfall">Rainfall only</option>
                  <option value="stream/river">Stream/River nearby</option>
                  <option value="borehole/well">Borehole/Well</option>
                  <option value="irrigation">Irrigation System</option>
                </Select>
              </FormControl>

              <FormControl isRequired>
                <FormLabel htmlFor="location">Farm Location</FormLabel>
                <Input
                  id="location"
                  name="location"
                  placeholder="e.g. Bamenda, Cameroon"
                  value={formData.location}
                  onChange={handleChange}
                  focusBorderColor="brand.800"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel htmlFor="marketDemand">Market Demand</FormLabel>
                <Select
                  id="marketDemand"
                  name="marketDemand"
                  placeholder="Select market demand"
                  value={formData.marketDemand}
                  onChange={handleChange}
                  focusBorderColor="brand.800"
                  borderColor="brand.700"
                >
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="farmSize">Farm Size (Optional)</FormLabel>
                <Input
                  id="farmSize"
                  name="farmSize"
                  placeholder="e.g. 2 hectares"
                  value={formData.farmSize}
                  onChange={handleChange}
                  focusBorderColor="brand.800"
                />
              </FormControl>

              <Button
                onClick={handleFormSubmit}
                isLoading={loading}
                loadingText={loadingText}
                colorScheme="green"
                size="lg"
                w="full"
                mt={2}
              >
                Get AI Recommendation
              </Button>

              {loading && (
                <Text fontSize="xs" color="brand.700">
                  This may take up to 1–2 minutes when real-time web data is
                  required.
                </Text>
              )}

              {error && (
                <Alert status="error" borderRadius="md">
                  <AlertIcon />
                  {error}
                </Alert>
              )}

              <Button
                type="link"
                mt="0.5rem"
                leftIcon={<ArrowBackIcon />}
                onClick={() => router.push("/ai-lab")}
                variant="outline"
                colorScheme="green"
              >
                Back to AI Lab
              </Button>
            </VStack>
          </Box>

          <VStack spacing={6} align="stretch">
            <Box
              p={5}
              borderRadius="xl"
              borderWidth="1px"
              boxShadow="md"
              bg="brand.500"
            >
              <HStack spacing={3} mb={3}>
                <InfoIcon color="brand.800" />
                <Heading size="sm" color="brand.900">
                  How the AI Crop Planner helps
                </Heading>
              </HStack>
              <Text fontSize="sm" color="brand.900" mb={3}>
                The planner looks at your growing conditions and market demand
                to suggest crops that balance:
              </Text>
              <VStack as="ul" align="flex-start" spacing={2} pl={5}>
                <Text as="li" fontSize="sm" color="brand.900">
                  ✅ Agronomic fit (soil, climate, water)
                </Text>
                <Text as="li" fontSize="sm" color="brand.900">
                  ✅ Market potential and selling price
                </Text>
                <Text as="li" fontSize="sm" color="brand.900">
                  ✅ Risk diversification across seasons
                </Text>
              </VStack>
            </Box>
          </VStack>
        </SimpleGrid>
        <Box
          p={5}
          borderRadius="xl"
          borderWidth="1px"
          boxShadow="md"
          bg="white"
          minH="180px"
          mt={10}
        >
          <HStack spacing={3} mb={3}>
            <CheckCircleIcon color="brand.800" />
            <Heading color={"brand.900"} size="sm">
              {suggestion
                ? "Recommended crop"
                : "Your recommendation appears here"}
            </Heading>
          </HStack>
          <Divider mb={3} />

          {suggestion ? (
            <>
              <Box
                fontSize="md"
                mb={3}
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
                  "& p a": {
                    color: "brand.800",
                    textDecoration: "underline",
                    _hover: { color: "brand.900" },
                  },
                  "& ul": {
                    listStylePos: "inside",
                    ml: 4,
                  },
                  "& li": {
                    color: "brand.800",
                    mb: 1,
                  },
                }}
                dangerouslySetInnerHTML={{ __html: suggestion }}
              />
              <Text fontSize="sm" color="brand.700">
                Use this as a starting point. Combine AI advice with your local
                knowledge, input costs, and experience before deciding your
                final crop plan.
              </Text>
            </>
          ) : (
            <>
              {loading ? (
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="brand.200"
                  color="brand.800"
                  size="xl"
                />
              ) : (
                <Text fontSize="sm" color="brand.700">
                  Fill in the form above and click{" "}
                  <strong>“Get AI Recommendation”</strong> to see a suggested
                  crop tailored to your conditions.
                </Text>
              )}
            </>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default AICropPlannerPage;
