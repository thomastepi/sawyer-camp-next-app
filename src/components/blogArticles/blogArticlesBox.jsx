"use client";
import React from "react";
import {
  Box,
  Center,
  Text,
  Stack,
  Image,
  Heading,
  useBreakpointValue,
  Button,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { articles } from "@/data/blogArticles";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const BlogArticleBox = ({ title, subtitle }) => {
  const router = useRouter();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const articlesToShow = articles.slice(0, 3);

  return (
    <Box w="100%">
      <VStack spacing={4} textAlign="center" mb={10}>
        <Heading as="h2" size="2xl" color="brand.900">
          {title}
        </Heading>
        {subtitle && (
          <Text fontSize="xl" maxW="2xl" color="brand.800">
            {subtitle}
          </Text>
        )}
      </VStack>

      <Center
        mt="6"
        gap="6"
        flexDir={{ base: "column", md: "row" }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {articlesToShow.map((item) => (
          <MotionBox
            key={item.id}
            maxW="sm"
            bg="brand.400"
            borderRadius="lg"
            boxShadow="md"
            overflow="hidden"
            whileHover={{
              scale: 1.03,
              boxShadow: "lg",
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            onClick={() => router.push(`/blog/${item.slug}`)}
            cursor="pointer"
          >
            <Image
              src={item.image}
              alt={item.title}
              w="100%"
              h="200px"
              objectFit="cover"
            />
            <Stack p={6}>
              <Text fontSize="sm" color="brand.700">
                {item.date}
              </Text>
              <Heading
                as="h3"
                size="md"
                color="brand.900"
                noOfLines={2}
                _hover={{ color: "brand.700" }}
              >
                {item.title}
              </Heading>
            </Stack>
          </MotionBox>
        ))}
      </Center>

      <VStack mt={12}>
        <Button
          as={Link}
          href="/blog"
          size="lg"
          variant="outline"
          colorScheme="green"
        >
          View All Articles
        </Button>
      </VStack>
    </Box>
  );
};

export default BlogArticleBox;
