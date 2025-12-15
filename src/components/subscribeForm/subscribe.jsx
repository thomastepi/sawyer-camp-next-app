"use client";
import React, { useEffect } from "react";
import validator from "validator";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { submitNewsletter } from "@/redux/features/newsletterSlice";
import DisplayAlert from "@/components/alert/customAlert";
import {
  setEmail,
  setFirstName,
  setLastName,
  setCompany,
} from "@/redux/features/newsletterSlice";
import {
  Box,
  Text,
  SimpleGrid,
  Heading,
  Button,
  Input,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";

const Subscribe = () => {
  const dispatch = useDispatch();
  const { isLoading, status, show } = useSelector((state) => state.newsletter);
  const alert = useSelector((state) => state.alert);

  const formik = useFormik({
    initialValues: { email: "", firstName: "", lastName: "", company: "" },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      firstName: Yup.string().optional(),
      lastName: Yup.string().optional(),
      company: Yup.string().optional(),
    }),
    onSubmit: (values, { resetForm }) => {
      const sanitizedValues = {
        email: validator.normalizeEmail(values.email),
        firstName: validator.escape(values.firstName || ""),
        lastName: validator.escape(values.lastName || ""),
        company: validator.escape(values.company || ""),
      };

      dispatch(setEmail(sanitizedValues.email));
      dispatch(setFirstName(sanitizedValues.firstName));
      dispatch(setLastName(sanitizedValues.lastName));
      dispatch(setCompany(sanitizedValues.company));
      dispatch(submitNewsletter(sanitizedValues));
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
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
      <VStack spacing={4} align="flex-start">
        <Heading
          as="h2"
          size="xl"
          textAlign={{ base: "center", md: "left" }}
          color="brand.900"
        >
          Stay Connected with Our Community
        </Heading>
        <Text fontSize="lg" color="brand.800">
          Subscribe to our newsletter to receive the latest updates on our
          projects, community stories, and sustainable farming tips directly in
          your inbox.
        </Text>
      </VStack>

      <Box p={{ base: 6, md: 8 }} bg="white" borderRadius="lg" boxShadow="lg">
        <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
          <VStack spacing={4} w="100%">
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

            <SimpleGrid columns={2} spacing={4} w="100%">
              <FormControl
                id="first-name"
                isInvalid={formik.touched.firstName && formik.errors.firstName}
              >
                <FormLabel>First Name</FormLabel>
                <Input
                  type="text"
                  name="firstName"
                  {...formik.getFieldProps("firstName")}
                  focusBorderColor="brand.800"
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl
                id="last-name"
                isInvalid={formik.touched.lastName && formik.errors.lastName}
              >
                <FormLabel>Last Name</FormLabel>
                <Input
                  type="text"
                  name="lastName"
                  {...formik.getFieldProps("lastName")}
                  focusBorderColor="brand.800"
                />
                <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
              </FormControl>
            </SimpleGrid>

            <Button
              type="submit"
              size="lg"
              w="100%"
              variant="solid"
              isLoading={isLoading}
              loadingText="Subscribing..."
            >
              Subscribe
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
  );
};

export default Subscribe;
