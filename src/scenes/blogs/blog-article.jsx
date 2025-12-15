"use client";
import React from "react";
import { articles } from "@/data/blogArticles";
import {
  Box,
  Heading,
  Text,
  VStack,
  Container,
  SimpleGrid,
  UnorderedList,
  ListItem,
  Image,
} from "@chakra-ui/react";
import { useRouter, notFound } from "next/navigation";
import PageHeader from "@/components/pageHeader/pageHeader";

const ArticleContent = ({ content }) => {
  return (
    <VStack spacing={5} align="stretch" fontSize="lg" color="brand.800">
      {content.map((item, index) => {
        switch (item.type) {
          case "heading":
            return (
              <Heading key={index} as="h3" size="lg" color="brand.900" pt={4}>
                {item.content}
              </Heading>
            );
          case "paragraph":
            return <Text key={index}>{item.content}</Text>;
          case "list":
            return (
              <UnorderedList key={index} spacing={2} pl={5}>
                {item.content.map((li, i) => (
                  <ListItem key={i}>{li}</ListItem>
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

const OtherArticleCard = ({ article }) => {
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
      onClick={() => router.push(`/blog/${article.slug}`)}
      cursor="pointer"
      _hover={{ transform: "translateY(-5px)", boxShadow: "lg" }}
      transition="transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out"
    >
      <Image
        src={article.image}
        alt={article.title}
        h="200px"
        w="100%"
        objectFit="cover"
      />
      <Box p={4} w="100%">
        <Heading size="sm" color="brand.900" noOfLines={2}>
          {article.title}
        </Heading>
      </Box>
    </VStack>
  );
};

const ArticlePage = ({ slug }) => {
  console.log("params/slug: ", slug);
  const article = articles.find((item) => item.slug === slug);

  const otherArticles = articles
    .filter((item) => item.slug !== slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  if (!article) {
    return notFound();
  }

  return (
    <Box>
      <PageHeader
        title={article.header}
        image={article.image}
        subtitle={article.date}
      />
      <Container maxW="container.md" py={16}>
        <ArticleContent content={article.content} />
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
            Other Articles
          </Heading>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={10}>
            {otherArticles.map((item) => (
              <OtherArticleCard key={item.id} article={item} />
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
};

export default ArticlePage;
