"use client";
import React from "react";
import Link from "next/link";
import {
  Heading,
  Box,
  Text,
  Button,
  VStack,
  Container,
} from "@chakra-ui/react";

const DonateHero = () => {
  return (
    <Box py={16} bg="brand.400">
      <Container maxW="container.lg">
        <VStack spacing={8} textAlign="center">
          <Heading as="h2" size="xl" color="brand.900">
            Your support empowers farmers, strengthens communities, and nurtures
            the planet.
          </Heading>
          <Text fontSize="lg" color="brand.800" maxW="3xl">
            Every donation helps small farmers implement climate-smart
            agriculture, ensuring food security and environmental sustainability
            for future generations. Join us in creating a food system that works
            for both people and the planet.
          </Text>
          <Button
            as={Link}
            href="/donate/checkout"
            colorScheme="green"
            size="lg"
          >
            Donate Now
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default DonateHero;
