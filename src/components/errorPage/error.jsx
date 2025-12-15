"use client";
import { Image, Text, Heading, VStack, Button, Center } from "@chakra-ui/react";
import Link from "next/link";

const image = "https://ik.imagekit.io/thormars/Sawyer-Camp/page_not_found.svg";

export default function ErrorComponent({
  heading = "Page Not Found",
  text = "Sorry, the page you are looking for does not exist.",
  btnText = "Go Back Home",
  btnLink = "/",
}) {
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
          {heading}
        </Heading>

        <Text fontSize="lg" color="brand.800">
          {text}
        </Text>
        <Button as={Link} href={btnLink} colorScheme="green" size="lg">
          {btnText}
        </Button>
      </VStack>
    </Center>
  );
}
