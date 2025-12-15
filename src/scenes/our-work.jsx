"use client";
import React from "react";
import {
  VStack,
  Box,
  Heading,
  Text,
  Flex,
  Image,
  Button,
  Container,
  HStack,
} from "@chakra-ui/react";
import goals from "@/data/goals";
import Link from "next/link";
import PageHeader from "@/components/pageHeader/pageHeader";

const headerImage =
  "https://ik.imagekit.io/thormars/Sawyer-Camp/yam-market.jpg";

const GoalSection = ({ goal, index }) => {
  const isEven = index % 2 === 0;
  const direction = { base: "column", md: isEven ? "row" : "row-reverse" };

  return (
    <Flex direction={direction} align="center" py={10} gap={10}>
      <Box flex="1">
        <Image
          src={goal.image}
          alt={goal.alt}
          borderRadius="lg"
          boxShadow="lg"
        />
      </Box>
      <Box flex="1">
        <VStack align="flex-start" spacing={4}>
          <Heading as="h3" size="lg" color="brand.900">
            {goal.title}
          </Heading>
          <Text fontSize="lg" color="brand.800">
            {goal.text}
          </Text>
        </VStack>
      </Box>
    </Flex>
  );
};

const OurWorkPage = () => {
  return (
    <>
      <PageHeader image={headerImage} title="Our Work" />
      <Container maxW="container.xl" py={16}>
        <VStack spacing={12} align="stretch">
          <VStack spacing={4} textAlign="center">
            <Heading as="h2" size="2xl" color="brand.900">
              Building a Network of Sustainable Farmers
            </Heading>
            <Text fontSize="xl" maxW="3xl" color="brand.800">
              At Sawyer Camp Farmers CIG, we believe that sustainability starts
              with people. By equipping smallholder farmers with education,
              resources, and collaborative support, we are building a thriving
              agricultural network that fosters food security, economic growth,
              and environmental responsibility.
            </Text>
          </VStack>

          <VStack
            spacing={16}
            divider={<Box borderBottomWidth="1px" borderColor="gray.200" />}
          >
            {goals.map((goal, index) => (
              <GoalSection key={goal.id} goal={goal} index={index} />
            ))}
          </VStack>
        </VStack>
      </Container>

      <Box bg="brand.400" py={16}>
        <Container maxW="container.lg">
          <VStack spacing={6} textAlign="center">
            <Heading as="h2" size="2xl" color="brand.900">
              Get Involved
            </Heading>
            <Text fontSize="xl" maxW="2xl" color="brand.800">
              Join us in our mission to empower farmers and build sustainable
              communities. Your support can make a real difference.
            </Text>
            <HStack spacing={6} pt={4}>
              <Button as={Link} href="/donate" size="lg" variant="solid">
                Donate
              </Button>
              <Button
                as={Link}
                href="/volunteer"
                size="lg"
                variant="outline"
                colorScheme="green"
              >
                Volunteer
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>
    </>
  );
};

export default OurWorkPage;
