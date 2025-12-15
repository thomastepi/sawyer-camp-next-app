"use client";
import Link from "next/link";
import PageHeader from "@/components/pageHeader/pageHeader";
import {
  Box,
  Text,
  VStack,
  SimpleGrid,
  Heading,
  Container,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { articles } from "@/data/blogArticles";

const MotionBox = motion(Box);
const headerImage = "https://ik.imagekit.io/thormars/Sawyer-Camp/carrots.jpg";

const ArticleCard = ({ article }) => {
  return (
    <MotionBox
      as={Link}
      href={`/blog/${article.slug}`}
      whileHover={{ y: -5, boxShadow: "lg" }}
      bg="white"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      borderWidth="1px"
      borderColor="gray.200"
      display="block"
    >
      <Image
        src={article.image}
        alt={article.title}
        h="250px"
        w="100%"
        objectFit="cover"
      />
      <Box p={6}>
        <VStack align="flex-start" spacing={3}>
          <Text fontSize="xs" color="brand.700" textTransform="uppercase">
            {article.date}
          </Text>
          <Heading size="md" color="brand.900" noOfLines={2}>
            {article.title}
          </Heading>
          <Text fontSize="sm" color="brand.800" noOfLines={3}>
            {article.summary}
          </Text>
        </VStack>
      </Box>
    </MotionBox>
  );
};

const BlogPage = () => {
  return (
    <Box>
      <PageHeader title="Our Blog" image={headerImage} />
      <Container maxW="container.xl" py={16}>
        <VStack spacing={4} textAlign="center" mb={10}>
          <Heading as="h2" size="2xl" color="brand.900">
            News & Stories from the Field
          </Heading>
          <Text fontSize="xl" maxW="3xl" color="brand.800">
            Stay connected with the latest updates, stories, and insights from
            the Sawyer Camp Farmers CIG community.
          </Text>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default BlogPage;
