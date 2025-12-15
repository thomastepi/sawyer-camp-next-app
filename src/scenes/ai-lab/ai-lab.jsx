"use client";
import {
  Box,
  SimpleGrid,
  Stack,
  Heading,
  Text,
  Flex,
  Badge,
  Divider,
  Container,
} from "@chakra-ui/react";
import PageHeader from "@/components/pageHeader/pageHeader";
import AILabCard from "@/components/aiLab/aiLabCard";
import { aiLabTools } from "@/data/aiLabTools";

const AILabPage = () => {
  return (
    <Box>
      <PageHeader
        title="AI Lab"
        image="https://ik.imagekit.io/thormars/Sawyer-Camp/plantain-banana.jpg"
      />

      <Container maxW="container.xl" py={16}>
        <Stack
          spacing={6}
          mb={10}
          p={{ base: 5, md: 8 }}
          borderRadius="2xl"
          bg="white"
          boxShadow="sm"
        >
          <Flex
            justify="space-between"
            align={"flex-start"}
            gap={4}
            flexDir={{ base: "column", md: "row" }}
          >
            <Stack spacing={3} maxW={{ base: "full", md: "60%" }}>
              <Badge
                alignSelf="flex-start"
                colorScheme="green"
                borderRadius="full"
                px={3}
                py={1}
                textTransform="none"
                fontWeight="semibold"
              >
                Farmer-focused AI
              </Badge>

              <Heading size="lg" color="brand.900">
                Discover AI tools crafted for sustainable farming
              </Heading>

              <Text fontSize="md" color="brand.800">
                The AI Lab is a collection of experimental tools built to
                support Sawyer Camp Farmers CIG and our wider community; from
                crop health analysis to smart recommendations that help you make
                better, data-driven decisions in the field.
              </Text>

              <Text fontSize="sm" color="brand.700">
                These tools are in beta. Results should complement, not replace
                your own expertise and the advice of local agronomists.
              </Text>
            </Stack>

            <Stack
              spacing={3}
              align={"flex-start"}
              fontSize="sm"
              color="brand.700"
            >
              <Text>
                🌱 <strong>Goal:</strong> Make AI accessible to smallholder
                farmers.
              </Text>
              <Text>
                🧪 <strong>Use case:</strong> Try a tool, share feedback, help
                us improve.
              </Text>
              <Text>
                🔒 <strong>Privacy:</strong> Your images and inputs are
                processed securely.
              </Text>
            </Stack>
          </Flex>

          <Divider borderColor="gray.200" />

          <Flex
            direction={{ base: "column", md: "row" }}
            gap={6}
            fontSize="sm"
            color="brand.700"
          >
            <Box>
              <Heading
                size="xs"
                mb={2}
                textTransform="uppercase"
                letterSpacing="wide"
                color="brand.900"
              >
                How it works
              </Heading>
              <Text>
                1. Choose a tool below • 2. Upload your data (image,
                description, etc.) • 3. Review the AI-generated insights and
                recommendations.
              </Text>
            </Box>

            <Box>
              <Heading
                size="xs"
                mb={2}
                textTransform="uppercase"
                letterSpacing="wide"
                color="brand.900"
              >
                Best results
              </Heading>
              <Text>
                Use clear photos, detailed descriptions, and recent field
                context so the AI can provide the most relevant analysis.
              </Text>
            </Box>
          </Flex>
        </Stack>

        <Heading size="xl" color="brand.900" mb={4} textAlign="center">
          Available AI tools
        </Heading>
        <Text fontSize="lg" color="brand.800" mb={6} textAlign="center">
          Explore the tools below. We&apos;ll keep adding more experiments as
          the AI Lab grows.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {aiLabTools.map((tool) => (
            <AILabCard key={tool.id} tool={tool} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default AILabPage;
