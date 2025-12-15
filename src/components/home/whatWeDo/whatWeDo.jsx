"use client";
import { useRef } from "react";
import Link from "next/link";
import {
  Box,
  Text,
  Button,
  Heading,
  VStack,
  Stack,
  Icon,
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { FaLeaf, FaChartLine, FaUsers } from "react-icons/fa";

const MotionBox = motion(Box);

const WhatWeDo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <Box ref={ref}>
      <VStack spacing={4} textAlign="center" mb={10}>
        <Heading as="h2" size="2xl" color="brand.900">
          Sustainable Farming. Thriving Communities.
        </Heading>
        <Text fontSize="xl" maxW="3xl" color="brand.800">
          In Banga Bakundu, Cameroon, we empower local farmers with sustainable
          agriculture and modern techniques. Through education and access to
          resources, we cultivate a thriving farming community that produces
          high-quality cash crops, driving both economic growth and food
          security.
        </Text>
      </VStack>

      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={8}
        justify="center"
        align="center"
        flexWrap="wrap"
        w="100%"
        mt={12}
      >
        <MotionBox
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.1 }}
        >
          <ServiceCard
            icon={FaLeaf}
            title="Sustainable Practices"
            text="We introduce innovative and eco-friendly methods to ensure long-term environmental health and crop quality."
          />
        </MotionBox>
        <MotionBox
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.3 }}
        >
          <ServiceCard
            icon={FaChartLine}
            title="Economic Growth"
            text="By focusing on high-quality cash crops, we create economic opportunities and strengthen local economies."
          />
        </MotionBox>
        <MotionBox
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.5 }}
        >
          <ServiceCard
            icon={FaUsers}
            title="Community Education"
            text="We provide hands-on training and access to resources, fostering a knowledgeable and resilient farming community."
          />
        </MotionBox>
      </Stack>
      <VStack mt={12}>
        <Button as={Link} href="/our-work" size="lg" variant="solid" px={10}>
          Learn More About Our Work
        </Button>
      </VStack>
    </Box>
  );
};

const ServiceCard = ({ icon, title, text }) => (
  <VStack
    bg="brand.400"
    p={8}
    borderRadius="lg"
    textAlign="center"
    spacing={4}
    maxW="350px"
    h="100%"
  >
    <Icon as={icon} w={10} h={10} color="brand.800" />
    <Heading as="h3" size="md">
      {title}
    </Heading>
    <Text>{text}</Text>
  </VStack>
);

export default WhatWeDo;
