"use client";
import React from "react";
import Link from "next/link";
import { useRouter, notFound } from "next/navigation";
import projects from "@/data/projects";
import PageHeader from "@/components/pageHeader/pageHeader";
import {
  Box,
  Text,
  Image,
  VStack,
  Heading,
  Button,
  Flex,
  Container,
  SimpleGrid,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ArticleContent = ({ article }) => {
  return (
    <VStack spacing={5} align="stretch">
      {article.map((item, index) => {
        switch (item.type) {
          case "heading":
            return (
              <Heading key={index} as="h3" size="lg" color="brand.900" pt={4}>
                {item.content}
              </Heading>
            );
          case "paragraph":
            return (
              <Text key={index} fontSize="lg" color="brand.800">
                {item.content}
              </Text>
            );
          case "list":
            return (
              <UnorderedList key={index} spacing={2} pl={5}>
                {item.content.map((li, i) => (
                  <ListItem key={i} fontSize="lg" color="brand.800">
                    {li}
                  </ListItem>
                ))}
              </UnorderedList>
            );
          default:
            return null;
        }
      })}
    </VStack>
  );
};

const OtherProjectCard = ({ project }) => {
  const router = useRouter();
  return (
    <VStack
      bg="white"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      borderWidth="1px"
      borderColor="gray.200"
      spacing={0}
      onClick={() => router.push(`/projects/${project.slug}`)}
      cursor="pointer"
      _hover={{ transform: "translateY(-5px)", boxShadow: "lg" }}
      transition="transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out"
    >
      <Image
        src={project.image}
        alt={project.name}
        h="200px"
        w="100%"
        objectFit="cover"
      />
      <Box p={4} w="100%">
        <Heading size="sm" color="brand.900" noOfLines={2}>
          {project.name}
        </Heading>
      </Box>
    </VStack>
  );
};

const ProjectDetailPage = ({ project }) => {
  const otherProjects = projects
    .filter((p) => p.id !== parseInt(project.id))
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  if (!project) {
    return notFound();
  }

  const { name, location, image, article } = project;
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject =
    projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <Box>
      <PageHeader title={name} image={image} />
      <Container maxW="container.lg" py={16}>
        <VStack spacing={8} align="stretch">
          <Text fontSize="lg" color="brand.700" fontWeight="medium">
            {location}
          </Text>
          <ArticleContent article={article} />

          <Flex justify="space-between" mt={8}>
            <Button
              as={Link}
              href={`/projects/${prevProject.slug}`}
              leftIcon={<FaArrowLeft />}
              variant="outline"
            >
              Previous
            </Button>
            <Button
              as={Link}
              href={`/projects/${nextProject.slug}`}
              rightIcon={<FaArrowRight />}
              variant="outline"
            >
              Next
            </Button>
          </Flex>
        </VStack>
      </Container>

      <Box bg="brand.400" py={16}>
        <Container maxW="container.lg">
          <Heading
            as="h3"
            size="xl"
            color="brand.900"
            textAlign="center"
            mb={10}
          >
            Other Projects
          </Heading>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={10}>
            {otherProjects.map((proj) => (
              <OtherProjectCard key={proj.id} project={proj} />
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
};

export default ProjectDetailPage;
