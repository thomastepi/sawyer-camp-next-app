"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { navGroups } from "@/data/navLinks";
import {
  HStack,
  VStack,
  Text,
  Link as ChakraLink,
  Box,
  Flex,
  Center,
  Button,
  SimpleGrid,
  useBreakpointValue,
} from "@chakra-ui/react";
import { SOCIAL_LINKS } from "@/data/socialLinks";
import { CONTACT_INFO } from "@/data/contactInfo";

const Footer = () => {
  const isMobileView = useBreakpointValue({ base: true, md: false });
  return (
    <footer>
      <Center
        py="50px"
        bg="brand.400"
        borderTop="2px solid"
        borderColor="brand.800"
        color="brand.900"
      >
        <Flex
          w={isMobileView ? "95%" : "80%"}
          h="100%"
          justify="space-between"
          direction={{ base: "column", md: "row" }}
        >
          <SimpleGrid
            columns={{ base: 1, sm: 3 }}
            spacing={{ base: 8, md: 10 }}
            mb={{ base: "40px", md: "0" }}
          >
            {navGroups.map((group) => (
              <VStack
                key={group.label}
                align={{ base: "center", md: "flex-start" }}
                spacing={3}
              >
                <Text fontWeight="bold" fontSize="lg">
                  {group.label}
                </Text>
                {group.links.map((link) => (
                  <ChakraLink
                    as={Link}
                    href={link.path}
                    key={link.path}
                    fontWeight="medium"
                    _hover={{ color: "brand.700" }}
                  >
                    {link.name}
                  </ChakraLink>
                ))}
              </VStack>
            ))}
          </SimpleGrid>
          <Box
            mb={{ base: "30px", md: "0" }}
            display="flex"
            alignItems="center"
          >
            <VStack w="100%" m="10px 0">
              <Text fontWeight="bold" fontSize="lg">
                Support Our Mission
              </Text>
              <Button
                as={Link}
                href="/donate"
                variant="solid"
                size="md"
              >
                Donate
              </Button>
            </VStack>
          </Box>
          <Box>
            <VStack spacing={4}>
              <HStack spacing={5}>
                <ChakraLink
                  href={SOCIAL_LINKS.LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </ChakraLink>
                <ChakraLink
                  href={SOCIAL_LINKS.TWITTER}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </ChakraLink>
                <ChakraLink
                  href={SOCIAL_LINKS.FACEBOOK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </ChakraLink>
                <ChakraLink
                  href={SOCIAL_LINKS.INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </ChakraLink>
              </HStack>
              <ChakraLink href={`mailto:${CONTACT_INFO.EMAIL}`}>
                {CONTACT_INFO.EMAIL}
              </ChakraLink>
              <Text pt={4} align="center">
                Sawyer Camp Farmers CIG • © {new Date().getFullYear()}
              </Text>
            </VStack>
          </Box>
        </Flex>
      </Center>
    </footer>
  );
};

export default Footer;
