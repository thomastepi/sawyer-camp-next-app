"use client";
import React, { useEffect, useMemo } from "react";
import validator from "validator";
import GoogleMaps from "@/components/googleMaps/googleMaps";
import DisplayAlert from "@/components/alert/customAlert";
import PageHeader from "@/components/pageHeader/pageHeader";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { setName, setEmail, setMessage } from "@/redux/features/contactSlice";
import { submitContactUs } from "@/redux/features/contactSlice";
import { SOCIAL_LINKS } from "@/data/socialLinks";
import { CONTACT_INFO } from "@/data/contactInfo";
import { useSearchParams } from "next/navigation";
import {
  Box,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  Button,
  Container,
  Icon,
  Link as ChakraLink,
} from "@chakra-ui/react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const headerImage =
  "https://ik.imagekit.io/thormars/Sawyer-Camp/green-leaf.jpg";

const ContactInfo = () => (
  <VStack spacing={6} align="flex-start">
    <Heading as="h3" size="lg" color="brand.900">
      Contact Information
    </Heading>
    <VStack spacing={4} align="flex-start">
      <HStack spacing={4}>
        <Icon as={FaMapMarkerAlt} w={5} h={5} color="brand.800" />
        <Text>Banga Bakundu, South West Region, Cameroon</Text>
      </HStack>
      <HStack spacing={4}>
        <Icon as={FaPhone} w={5} h={5} color="brand.800" />
        <Text>+237 6 51 77 18 43</Text>
      </HStack>
      <HStack spacing={4}>
        <Icon as={FaEnvelope} w={5} h={5} color="brand.800" />
        <ChakraLink href={`mailto:${CONTACT_INFO.EMAIL}`}>
          {CONTACT_INFO.EMAIL}
        </ChakraLink>
      </HStack>
    </VStack>
    <Heading as="h3" size="lg" color="brand.900" pt={6}>
      Follow Us
    </Heading>
    <HStack spacing={5}>
      <ChakraLink href={SOCIAL_LINKS.LINKEDIN} isExternal>
        <Icon
          as={FaLinkedin}
          w={7}
          h={7}
          color="brand.800"
          _hover={{ color: "brand.900" }}
        />
      </ChakraLink>
      <ChakraLink href={SOCIAL_LINKS.TWITTER} isExternal>
        <Icon
          as={FaTwitter}
          w={7}
          h={7}
          color="brand.800"
          _hover={{ color: "brand.900" }}
        />
      </ChakraLink>
      <ChakraLink href={SOCIAL_LINKS.FACEBOOK} isExternal>
        <Icon
          as={FaFacebook}
          w={7}
          h={7}
          color="brand.800"
          _hover={{ color: "brand.900" }}
        />
      </ChakraLink>
      <ChakraLink href={SOCIAL_LINKS.INSTAGRAM} isExternal>
        <Icon
          as={FaInstagram}
          w={7}
          h={7}
          color="brand.800"
          _hover={{ color: "brand.900" }}
        />
      </ChakraLink>
    </HStack>
  </VStack>
);

const ContactUsPage = () => {
  const dispatch = useDispatch();
  const { isLoading, status, show } = useSelector((state) => state.contactUs);
  const alert = useSelector((state) => state.alert);
  const searchParams = useSearchParams();

  const prefilledMessage = useMemo(() => {
    const productName = searchParams.get("product");
    if (!productName) return "";

    const normalizedName = productName.trim();
    if (!normalizedName) return "";

    return `Hi Sawyer Camp, I'm interested in ${normalizedName}. Can you share pricing, availability, and lead time?`;
  }, [searchParams]);

  const formik = useFormik({
    initialValues: { name: "", email: "", message: prefilledMessage },
    enableReinitialize: true,
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string()
        .min(10, "Message must be at least 10 characters")
        .required("Message is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      const sanitizedValues = {
        name: validator.escape(values.name),
        email: validator.normalizeEmail(values.email),
        message: validator.escape(values.message),
      };
      dispatch(setName(sanitizedValues.name));
      dispatch(setEmail(sanitizedValues.email));
      dispatch(setMessage(sanitizedValues.message));
      dispatch(submitContactUs(sanitizedValues));
      if (status === "success") {
        resetForm();
      }
    },
  });

  const { resetForm } = formik;

  useEffect(() => {
    if (status === "success") {
      resetForm();
    }
  }, [status, resetForm]);

  return (
    <Box>
      <PageHeader image={headerImage} title="Connect with Us" />
      <Container maxW="container.xl" py={16}>
        <VStack spacing={4} textAlign="center" mb={10}>
          <Heading as="h2" size="2xl" color="brand.900">
            Let's Chat
          </Heading>
          <Text fontSize="xl" maxW="3xl" color="brand.800">
            We'd love to hear from you! Whether you have a question, a
            suggestion, or want to partner with us, feel free to reach out.
          </Text>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <VStack spacing={8} align="stretch">
            <ContactInfo />
            <Box h="400px" borderRadius="lg" overflow="hidden">
              <GoogleMaps />
            </Box>
          </VStack>
          <Box bg="white" p={8} borderRadius="lg" boxShadow="md">
            <form onSubmit={formik.handleSubmit}>
              <VStack spacing={4}>
                <FormControl
                  id="name"
                  isInvalid={formik.touched.name && formik.errors.name}
                  isRequired
                >
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    {...formik.getFieldProps("name")}
                    focusBorderColor="brand.800"
                  />
                  <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                </FormControl>
                <FormControl
                  id="email"
                  isInvalid={formik.touched.email && formik.errors.email}
                  isRequired
                >
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    {...formik.getFieldProps("email")}
                    focusBorderColor="brand.800"
                  />
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl
                  id="message"
                  isInvalid={formik.touched.message && formik.errors.message}
                  isRequired
                >
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    name="message"
                    {...formik.getFieldProps("message")}
                    focusBorderColor="brand.800"
                    rows={5}
                  />
                  <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
                </FormControl>
                <Button
                  type="submit"
                  size="lg"
                  w="100%"
                  variant="solid"
                  isLoading={isLoading}
                  loadingText="Sending..."
                >
                  Send Message
                </Button>
                {show && (
                  <DisplayAlert
                    message={alert.message}
                    alertStatus={alert.status}
                    title={alert.title}
                  />
                )}
              </VStack>
            </form>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default ContactUsPage;
