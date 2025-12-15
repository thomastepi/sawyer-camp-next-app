"use client";
import {
  Box,
  Text,
  Heading,
  VStack,
  Container,
  SimpleGrid,
  Image,
  Flex,
  Icon,
} from "@chakra-ui/react";
import {
  FaEye,
  FaBullseye,
  FaHeart,
  FaHandshake,
  FaLeaf,
} from "react-icons/fa";
import PageHeader from "@/components/pageHeader/pageHeader";

const aboutUsImage = "https://ik.imagekit.io/thormars/Sawyer-Camp/about-us.jpg";
const storyImage = "https://ik.imagekit.io/thormars/Sawyer-Camp/group.jpg";

const ValueCard = ({ icon, title, text }) => (
  <VStack spacing={4} textAlign="center">
    <Icon as={icon} w={10} h={10} color="brand.800" />
    <Heading as="h3" size="md" color="brand.900">
      {title}
    </Heading>
    <Text color="brand.800">{text}</Text>
  </VStack>
);

const AboutUsPage = () => {
  return (
    <Box>
      <PageHeader image={aboutUsImage} title="About Us" />

      <Container maxW="container.lg" py={16}>
        <VStack spacing={12} align="stretch">
          <VStack spacing={4} textAlign="center">
            <Heading as="h2" size="xl" color="brand.900">
              Building a Sustainable Future Together
            </Heading>
            <Text fontSize="lg" color="brand.800">
              Founded in 1989 by Mr. Emmanuel Atud, Sawyer Camp Farmers CIG was
              born out of a vision to empower rural communities through
              sustainable agriculture. With a Master's degree in Agricultural
              Economics, Mr. Atud recognized the transformative power of
              education, collaboration, and resource access in uplifting local
              farmers.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <VStack bg="brand.400" p={8} borderRadius="lg" spacing={4}>
              <Icon as={FaBullseye} w={10} h={10} color="brand.800" />
              <Heading as="h3" size="lg" color="brand.900">
                Our Mission
              </Heading>
              <Text textAlign="center" fontSize="md" color="brand.800">
                To empower local farmers with sustainable agricultural practices
                that drive economic growth, ensure food security, and preserve
                the environment for future generations.
              </Text>
            </VStack>
            <VStack bg="brand.400" p={8} borderRadius="lg" spacing={4}>
              <Icon as={FaEye} w={10} h={10} color="brand.800" />
              <Heading as="h3" size="lg" color="brand.900">
                Our Vision
              </Heading>
              <Text textAlign="center" fontSize="md" color="brand.800">
                To be a leading model of community-driven, sustainable
                agriculture in Cameroon, creating a thriving and resilient rural
                economy where both people and nature flourish.
              </Text>
            </VStack>
          </SimpleGrid>

          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            py={10}
          >
            <Box flex="1" pr={{ base: 0, md: 10 }}>
              <Heading
                as="h2"
                size="xl"
                textAlign={{ base: "center", md: "left" }}
                color="brand.900"
                mb={4}
              >
                Our Story
              </Heading>
              <Text color="brand.800" fontSize="lg" mb={4}>
                For years, our rural communities faced mounting challenges:
                climate change, biodiversity loss, and rural poverty. Instead of
                standing by, we took action. As a united community-based
                organization, Sawyer Camp Farmers CIG turned these challenges
                into opportunities, equipping farmers with the tools and
                knowledge to adapt, grow, and prosper.
              </Text>
              <Text color="brand.800" fontSize="lg">
                Today, Sawyer Camp Farmers CIG is a thriving collective of
                dedicated farmers. We are leaders in sustainable agriculture,
                driving economic prosperity while preserving our environment.
              </Text>
            </Box>
            <Box flex="1" mt={{ base: 8, md: 0 }}>
              <Image
                src={storyImage}
                alt="Our Story"
                borderRadius="lg"
                boxShadow="lg"
              />
            </Box>
          </Flex>

          <VStack spacing={8} py={10}>
            <Heading as="h2" size="xl" color="brand.900" textAlign="center">
              Our Core Values
            </Heading>
            <SimpleGrid
              columns={{ base: 1, sm: 2, md: 3 }}
              spacing={10}
              w="100%"
            >
              <ValueCard
                icon={FaHeart}
                title="Community"
                text="We believe in the power of collaboration and mutual support to achieve collective success."
              />
              <ValueCard
                icon={FaHandshake}
                title="Integrity"
                text="We operate with transparency and accountability in all our interactions."
              />
              <ValueCard
                icon={FaLeaf}
                title="Sustainability"
                text="We are committed to farming practices that protect our planet for future generations."
              />
            </SimpleGrid>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default AboutUsPage;
