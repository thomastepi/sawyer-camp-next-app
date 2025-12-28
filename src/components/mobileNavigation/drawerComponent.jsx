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
} from "@chakra-ui/react";
import Link from "next/link";
import navLinks from "@/data/navLinks";
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
              <Box color="green">
                <VStack spacing={7}>
                  <Button
                    as={Link}
                    href="/donate"
                    variant="solid"
                    colorScheme="green"
                    onClick={onClose}
                  >
                    Donate
                  </Button>
                  {navLinks.map((link, index) => (
                    <Link key={index} href={link.path}>
                      <Text onClick={onClose}>{link.name}</Text>
                    </Link>
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
