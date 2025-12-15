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
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

const DonateContent = () => {
  return (
    <Box py={16}>
      <Container maxW="container.lg">
        <VStack spacing={8} textAlign="center">
          <Heading as="h2" size="2xl" color="brand.900" maxW="4xl">
            Together, we cultivate a future where healthy food, thriving
            ecosystems, and strong rural communities go hand-in-hand.
          </Heading>

          <Box bg="brand.400" p={8} borderRadius="lg" boxShadow="md" w="full">
            <VStack spacing={4} color="brand.900">
              <Text fontSize="xl" fontWeight="bold">
                Your support empowers us to:
              </Text>
              <UnorderedList spacing={2} textAlign="left">
                <ListItem fontSize="lg">
                  Develop innovative solutions for climate change in
                  agriculture.
                </ListItem>
                <ListItem fontSize="lg">
                  Equip smallholder farmers with sustainable and efficient
                  practices.
                </ListItem>
                <ListItem fontSize="lg">
                  Launch large-scale projects that drive positive change in
                  rural communities.
                </ListItem>
              </UnorderedList>
              <Button
                as={Link}
                href="/donate/checkout"
                colorScheme="green"
                size="lg"
                mt={4}
              >
                Support Our Work
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default DonateContent;
