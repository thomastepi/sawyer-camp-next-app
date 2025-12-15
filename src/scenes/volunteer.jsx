"use client";
import { PopupButton } from "@typeform/embed-react";
import {
  Box,
  VStack,
  Heading,
  Text,
  Image,
  Button,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";
import PageHeader from "@/components/pageHeader/pageHeader";
import { roles } from "@/data/volunteerRoles";

const headerImage =
  "https://ik.imagekit.io/thormars/Sawyer-Camp/farm-women.jpg";

const RoleCard = ({ role }) => {
  return (
    <VStack
      bg="white"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      borderWidth="1px"
      borderColor="gray.200"
      p={6}
      spacing={4}
      align="center"
      textAlign="center"
    >
      <Image
        src={role.img}
        alt={role.alt}
        h="200px"
        w="100%"
        objectFit="cover"
        borderRadius="md"
      />
      <Heading size="md" color="brand.900">
        {role.title}
      </Heading>
      <Text fontSize="md" color="brand.800" noOfLines={4}>
        {role.description}
      </Text>
    </VStack>
  );
};

const VolunteerPage = () => {
  const id = process.env.NEXT_PUBLIC_TYPEFORM_ID_VOLUNTEER;

  return (
    <Box>
      <PageHeader title="Volunteer with Us" image={headerImage} />
      <Container maxW="container.xl" py={16}>
        <VStack spacing={8} textAlign="center" mb={10}>
          <Heading as="h2" size="2xl" color="brand.900">
            Join Our Mission
          </Heading>
          <Text fontSize="xl" maxW="3xl" color="brand.800">
            Volunteers are the backbone of our efforts at SCF-CIG. By donating
            your time and skills, you can help us make a significant impact in
            our community.
          </Text>
        </VStack>

        <Box bg="brand.400" p={8} borderRadius="lg" boxShadow="md">
          <VStack spacing={6} textAlign="center" mb={10}>
            <Heading as="h3" size="xl" color="brand.900">
              How You Can Help
            </Heading>
            <Text fontSize="lg" maxW="2xl" color="brand.800">
              We have a variety of volunteer opportunities that match different
              skills and interests. Whether you can offer a few hours a week or
              a full day, your contribution is valuable.
            </Text>
          </VStack>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            {roles.map((role) => (
              <RoleCard key={role.id} role={role} />
            ))}
          </SimpleGrid>
        </Box>

        <VStack spacing={8} textAlign="center" py={16}>
          <Heading as="h2" size="2xl" color="brand.900">
            Ready to Make a Difference?
          </Heading>
          <Text fontSize="xl" maxW="3xl" color="brand.800">
            Sign up today to become a volunteer and join us in creating a
            sustainable future for our community.
          </Text>
          <Button as="div" size="lg" colorScheme="green">
            <PopupButton id={id} style={{ fontSize: 20 }} className="my-button">
              Sign Up To Volunteer
            </PopupButton>
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default VolunteerPage;
