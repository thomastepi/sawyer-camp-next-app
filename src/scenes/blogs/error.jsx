"use client";
import { Image, Text, Heading, VStack, Button, Center } from "@chakra-ui/react";
import Link from "next/link";

const image = "https://ik.imagekit.io/thormars/Sawyer-Camp/page_not_found.svg";

export default function ErrorPage() {
  return (
    <Center minH="100vh" py={10} bg="brand.600">
      <VStack
        spacing={8}
        p={8}
        bg="white"
        borderRadius="lg"
        boxShadow="xl"
        maxW="lg"
        textAlign="center"
      >
        <Image
          src={image}
          alt="Page Not Found"
          boxSize={{ base: "200px", md: "300px" }}
        />

        <Heading as="h1" size="xl" color="brand.900">
          Article Not Found
        </Heading>

        <Text fontSize="lg" color="brand.800">
          Sorry, the article you are looking for does not exist.
        </Text>

        <Button as={Link} href="/blog" colorScheme="green" size="lg">
          Back to Blog
        </Button>
      </VStack>
    </Center>
  );
}
