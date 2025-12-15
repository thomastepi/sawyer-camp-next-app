"use client";
import { useEffect, useRef } from "react";
import { Box, Heading, SimpleGrid, Text, VStack, Icon } from "@chakra-ui/react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";

import { impactData } from "@/data/homeImpactData";

const Counter = ({ to }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, to, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const StatCard = ({ stat }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <VStack
      ref={ref}
      bg="white"
      p={8}
      borderRadius="lg"
      boxShadow="lg"
      textAlign="center"
      spacing={4}
      as={motion.div}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <Icon as={stat.icon} w={12} h={12} color="brand.800" />
      <Heading size="2xl" color="brand.900">
        <Counter to={stat.end} />
        {stat.suffix}
      </Heading>
      <Text fontSize="xl" fontWeight="bold" color="brand.700">
        {stat.label}
      </Text>
      <Text fontSize="md">{stat.text}</Text>
    </VStack>
  );
};

const ImpactSection = () => {
  return (
    <Box>
      <VStack spacing={4} textAlign="center" mb={10}>
        <Heading as="h2" size="2xl" color="brand.900">
          Our Impact in Numbers
        </Heading>
        <Text fontSize="xl" maxW="3xl" color="brand.800">
          We are committed to creating measurable change for our farmers and the
          community. Our efforts have led to significant growth and empowerment.
        </Text>
      </VStack>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} py={5}>
        {impactData.map((stat, index) => (
          <StatCard key={index} stat={stat} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ImpactSection;
