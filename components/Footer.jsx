import { Flex, HStack, Heading, Link, Text, VStack } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

const Footer = () => {
  return (
    <Flex w={"100%"} flexDir={"column"} bgColor={"#061237"} alignItems={"center"}>
      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        w={"100%"}
        mt={10}  
      >
        <VStack w={{base:"70%",md:"30%"}} m={8} justifyContent={"center"} alignItems={"flex-start"}>
          <Heading as="h2" size={{ base: "md", lg: "lg" }} color={"white"}>
            XCompany
          </Heading>
          <Text size={"md"} color={"gray.500"}>
            The most complete Talent Relationship Platform for talent, sourcing,
            recruitment events and internal mobility.
          </Text>
          <HStack></HStack>
        </VStack>
        <VStack
          spacing={3}
          m={8}
          alignItems={"flex-start"}
        >
          <Heading color={"white"}>Solutions</Heading>
          <Link color={"gray.500"}>Talent Sourcing</Link>
          <Link color={"gray.500"}>Employees Referrals</Link>
          <Link color={"gray.500"}>Alumni Programs</Link>
          <Link color={"gray.500"}>Internal Mobility</Link>
        </VStack>
        <VStack
          spacing={3}
          m={8}
          alignItems={"flex-start"}
        >
          <Heading color={"white"}>Resources</Heading>
          <Link color={"gray.500"}>Recruitment Market</Link>
          <Link color={"gray.500"}>Video Gallery</Link>
          <Link color={"gray.500"}>Webinars & Events</Link>
          <Link color={"gray.500"}>Success Stories</Link>
        </VStack>
        <VStack
          spacing={3}
          m={8}
          alignItems={"flex-start"}
        >
          <Heading color={"white"}>Company</Heading>
          <Link color={"gray.500"}>Careers</Link>
          <Link color={"gray.500"}>Contact Us</Link>
          <Link color={"gray.500"}>Privacy Policy</Link>
          <Link color={"gray.500"}>Imprint</Link>
        </VStack>
        
      </Flex>
      <Text size={{ base: "sm", sm: "md" }} color={"white"} pt={10} pb={10}>
          All rights reserved @XCompany
        </Text>
    </Flex>
  );
};

export default Footer;
