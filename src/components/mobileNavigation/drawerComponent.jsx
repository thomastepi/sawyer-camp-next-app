"use client";
import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  VStack,
  Button,
  Text,
  Divider,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";
import { navGroups } from "@/data/navLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DrawerPanel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Button ref={btnRef} colorScheme="green" onClick={onOpen} bg="green">
        {<FontAwesomeIcon color="white" icon={faBars} size="2x" />}
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="#D2E3C8">
          <DrawerCloseButton padding={5} size={3} color="green" />
          <DrawerBody marginTop={20}>
            <Box py={4}>
              <Box color="brand.900">
                <VStack spacing={7} align="stretch">
                  <Button
                    as={Link}
                    href="/donate"
                    variant="solid"
                    colorScheme="green"
                    onClick={onClose}
                  >
                    Donate
                  </Button>
                  <ChakraLink as={Link} href="/" onClick={onClose}>
                    Home
                  </ChakraLink>
                  <ChakraLink as={Link} href="/signin" onClick={onClose}>
                    Sign In
                  </ChakraLink>
                  <Divider borderColor="brand.700" />
                  {navGroups.map((group) => (
                    <VStack key={group.label} align="stretch" spacing={3}>
                      <Text
                        color="brand.800"
                        fontSize="sm"
                        fontWeight="bold"
                        textTransform="uppercase"
                      >
                        {group.label}
                      </Text>
                      {group.links.map((link) => (
                        <ChakraLink
                          as={Link}
                          key={link.path}
                          href={link.path}
                          onClick={onClose}
                        >
                          {link.name}
                        </ChakraLink>
                      ))}
                    </VStack>
                  ))}
                </VStack>
              </Box>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerPanel;
