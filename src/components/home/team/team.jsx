"use client";
import {
  Heading,
  Box,
  SimpleGrid,
  Text,
  Card,
  Image,
  VStack,
} from "@chakra-ui/react";
import team from "@/data/adminTeam";

const TeamMemberCard = ({ member }) => {
  return (
    <Card overflow="hidden" borderRadius="lg" boxShadow="md" bg="brand.400">
      <Image
        src={member.image}
        alt={member.name}
        h="300px"
        w="100%"
        objectFit="cover"
      />
      <Box p={6}>
        <Heading size="md" color="brand.900">
          {member.name}
        </Heading>
        <Text py="2" color="brand.700" fontWeight="medium">
          {member.title}
        </Text>
      </Box>
    </Card>
  );
};

const Team = () => {
  return (
    <Box>
      <VStack spacing={4} textAlign="center" mb={10}>
        <Heading as="h2" size="2xl" color="brand.900">
          Our Team
        </Heading>
        <Text fontSize="xl" maxW="2xl" color="brand.800">
          Meet the dedicated individuals who are leading our mission to empower
          local farmers.
        </Text>
      </VStack>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3 }}
        spacing={10}
        py={5}
        px={0}
      >
        {team.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Team;
