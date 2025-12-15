"use client";
import React from "react";
import projects from "@/data/projects";
import Link from "next/link";
import PageHeader from "@/components/pageHeader/pageHeader";
import {
  Box,
  Text,
  VStack,
  SimpleGrid,
  Heading,
  Button,
  Container,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const headerImage = "https://ik.imagekit.io/thormars/Sawyer-Camp/ridges.jpg";

const ProjectCard = ({ project }) => {
  return (
    <MotionBox
      as={motion.div}
      whileHover={{ y: -5, boxShadow: "lg" }}
      bg="white"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      borderWidth="1px"
      borderColor="gray.200"
    >
      <Image
        src={project.image}
        alt={project.name}
        h="250px"
        w="100%"
        objectFit="cover"
      />
      <Box p={6}>
        <VStack align="flex-start" spacing={3}>
          <Heading size="md" color="brand.900" noOfLines={2}>
            {project.name}
          </Heading>
          <Text fontSize="sm" color="brand.700" noOfLines={3}>
            {project.summary}
          </Text>
          <Button
            as={Link}
            href={`/projects/${project.slug}`}
            variant="outline"
            colorScheme="green"
            size="sm"
          >
            Read More
          </Button>
        </VStack>
      </Box>
    </MotionBox>
  );
};

const ProjectPage = () => {
  return (
    <Box>
      <PageHeader image={headerImage} title="Our Projects" />
      <Container maxW="container.xl" py={16}>
        <VStack spacing={4} textAlign="center" mb={10}>
          <Heading as="h2" size="2xl" color="brand.900">
            Our Initiatives
          </Heading>
          <Text fontSize="xl" maxW="3xl" color="brand.800">
            From empowering farmers with high-quality seedlings to ensuring
            every child has the support they need for school, our projects are
            designed to create lasting, positive change in our community.
          </Text>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default ProjectPage;
