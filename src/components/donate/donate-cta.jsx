"use client";
import Link from "next/link";
import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  Button,
  Container,
  VStack,
} from "@chakra-ui/react";

const DonateCallToAction = () => {
  return (
    <Box bg="brand.800" color="white" py={16}>
      <Container maxW="container.lg">
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={10}
          alignItems="center"
        >
          <VStack
            align={{ base: "center", md: "flex-start" }}
            textAlign={{ base: "center", md: "left" }}
            spacing={4}
          >
            <Heading as="h2" size="xl" mb={4}>
              Help us cultivate a future where agriculture and nature flourish -
              donate today!
            </Heading>
            <Button
              as={Link}
              href="/donate/checkout"
              bg="brand.900"
              _hover={{ bg: "brand.800" }}
              size="lg"
            >
              Donate Now
            </Button>
          </VStack>
          <Box>
            <Text fontSize="lg">
              Small farmers are key to building a truly sustainable food system.
              Investment in their success empowers them to implement innovative
              practices that benefit our planet and communities. Your
              contribution, no matter the size, makes a significant impact.
            </Text>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default DonateCallToAction;
