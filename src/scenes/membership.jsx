"use client";
import React from "react";
import { PopupButton } from "@typeform/embed-react";
import {
  Box,
  Text,
  VStack,
  Heading,
  Image,
  Container,
  SimpleGrid,
  Button,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import PageHeader from "@/components/pageHeader/pageHeader";
const img = "https://ik.imagekit.io/thormars/Sawyer-Camp/corn-farm.jpg";
const membershipImage =
  "https://ik.imagekit.io/thormars/Sawyer-Camp/ayisatu.jpg";

function MembershipPage() {
  const id = process.env.NEXT_PUBLIC_TYPEFORM_ID;

  return (
    <Box>
      <PageHeader image={img} title="Join Our Community" />
      <Container maxW="container.xl" py={16}>
        <VStack spacing={8} textAlign="center" mb={10}>
          <Heading as="h2" size="2xl" color="brand.900">
            Become a Part of Something Bigger
          </Heading>
          <Text fontSize="xl" maxW="3xl" color="brand.800">
            Join a thriving community of farmers committed to sustainable
            agriculture, economic empowerment, and environmental stewardship. At
            Sawyer Camp Farmers CIG, we believe that together, we can reshape
            the future of farming through shared knowledge, resources, and
            action.
          </Text>
        </VStack>

        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={10}
          alignItems="center"
          bg="brand.400"
          p={8}
          borderRadius="lg"
          boxShadow="md"
        >
          <VStack spacing={6} align="stretch">
            <Text fontSize="xl" color="brand.900" fontWeight="bold">
              Unlock Your Potential with Membership Benefits:
            </Text>
            <UnorderedList spacing={2} pl={5}>
              <ListItem fontSize="lg" color="brand.800">
                Access to expert training and modern farming techniques.
              </ListItem>
              <ListItem fontSize="lg" color="brand.800">
                Connect with a supportive network of fellow farmers.
              </ListItem>
              <ListItem fontSize="lg" color="brand.800">
                Opportunities for economic empowerment and market access.
              </ListItem>
              <ListItem fontSize="lg" color="brand.800">
                Contribute to sustainable practices and environmental
                stewardship.
              </ListItem>
            </UnorderedList>
            <Button as="div" size="lg" colorScheme="green" mt={4}>
              <PopupButton
                id={id}
                style={{ fontSize: 20 }}
                className="my-button"
              >
                Become a Member
              </PopupButton>
            </Button>
          </VStack>
          <Box>
            <Image
              src={membershipImage}
              alt="Farmers in a field"
              borderRadius="lg"
              boxShadow="lg"
            />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default MembershipPage;
