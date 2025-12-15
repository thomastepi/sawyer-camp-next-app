"use client";
import React, { useState } from "react";
import {
  Box,
  Heading,
  VStack,
  Button,
  SimpleGrid,
  Text,
  Container,
  Image,
  HStack,
  Tag,
} from "@chakra-ui/react";
import tools from "@/data/recommendedTools";
import PageHeader from "@/components/pageHeader/pageHeader";

const headerImage = "https://ik.imagekit.io/thormars/Sawyer-Camp/empower.jpg";

const ToolCard = ({ tool }) => {
  return (
    <VStack
      bg="white"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      borderWidth="1px"
      borderColor="gray.200"
      p={4}
      spacing={4}
      align="stretch"
      textAlign="center"
    >
      <Image
        src={tool.img}
        alt={tool.name}
        h="200px"
        w="100%"
        objectFit="contain"
      />
      <VStack spacing={2} flex="1" justify="space-between">
        <Heading size="sm" color="brand.900" noOfLines={2}>
          {tool.name}
        </Heading>
        <Button
          as="a"
          href={tool.link}
          target="_blank"
          rel="noopener noreferrer"
          variant="solid"
          size="sm"
          w="100%"
        >
          View on Amazon
        </Button>
      </VStack>
    </VStack>
  );
};

const FarmToolsPage = () => {
  const [filter, setFilter] = useState("All");
  const categories = [
    "All",
    ...new Set(tools.flatMap((item) => item.category)),
  ];

  const filteredTools =
    filter === "All"
      ? tools
      : tools.filter((tool) => tool.category.includes(filter));

  return (
    <Box>
      <PageHeader title="Recommended Farming Tools" image={headerImage} />
      <Container maxW="container.xl" py={16}>
        <VStack spacing={4} textAlign="center" mb={10}>
          <Heading as="h2" size="2xl" color="brand.900">
            Our Recommended Toolkit
          </Heading>
          <Text fontSize="lg" maxW="3xl" color="brand.800">
            These tools are listed through Amazon.com and are recommended for
            supporters who wish to donate equipment or for farmers looking for
            reliable gear. Your purchases via these links may support our work
            through affiliate commissions at no extra cost to you.
          </Text>
        </VStack>

        <HStack spacing={4} justify="center" mb={10} flexWrap="wrap">
          {categories.map((cat) => (
            <Tag
              key={cat}
              size="lg"
              variant={filter === cat ? "solid" : "outline"}
              colorScheme="green"
              onClick={() => setFilter(cat)}
              cursor="pointer"
              mb={2}
            >
              {cat}
            </Tag>
          ))}
        </HStack>

        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={8}>
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default FarmToolsPage;
