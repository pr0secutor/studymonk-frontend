import {
  Button,
  Flex,
  Heading,
  Text,
  VStack,
  Image,
  useMediaQuery,
  HStack,
  StackDivider,
  Stack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const Banner = () => {

  return (
    <Flex
      w={"100%"}
      flexDir={"column"}
      p={10}
      mb={10}
      bgColor={"#061237"}
      gap={10}
      alignItems={"center"}
    >
      <Flex
        w={"100%"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        flexDir={{ base: "column", md: "row" }}
      >
        <Image
          as={motion.img}
          pos={"relative"}
          src={"/businessman.jpg"}
          alt="Banner Image"
          w={{ base: "80%", md: "40%" }}
          objectFit={"cover"}
          borderRadius={"3xl"}
          borderTopRightRadius={"200px"}
          borderBottomLeftRadius={"200px"}
          initial={{opacity:0}}
          animate={{opacity:1, transition:{duration:0.6}}}
        />
        <VStack
          spacing={{base:4,md:8}}
          width={{ base: "90%", md: "40%" }}
          m={{base:5,lg:16}}
          alignItems={"flex-start"}
        >
          <Heading
            fontSize={{ base: "4xl", md: "5xl",lg:"6xl" }}
            color={"white"}
            mt={10}
            mb={10}
            fontWeight={"400"}
          >
            <Heading
              as="span"
              color={"#1455FD"}
              fontSize={{ base: "4xl", md: "5xl",lg:"6xl" }}
              fontWeight={"400"}
            >
              Recruiting made Simple
            </Heading>
            <br /> attract and retain talent
          </Heading>
          <Text color={"white"} fontSize={"lg"}>
            The most trusted Talent Relationship Platform for talent Sourcing
            that takes your recruiting into the digital age.
          </Text>
          <Button
            size={"md"}
            color={"white"}
            bgColor={"#1455FD"}
            _hover={{ bgColor: "white", color: "black" }}
          >
            Request a Demo
          </Button>
          <Stack direction={{base:"column",lg:"row"}} spacing={4} divider={<StackDivider borderColor="gray.200" />}>
            <HStack spacing={4} minW={"230px"}>
              <Text color={"white"} fontSize={"4xl"}>
                4.5/5
              </Text>
              <Text color={"gray.600"} fontSize={"lg"}>
                Value Rated from Trustpilot
              </Text>
            </HStack>

            <HStack spacing={4} minW={"230px"}>
              <Text color={"white"} fontSize={"4xl"}>
                7K+
              </Text>
              <Text color={"gray.600"} fontSize={"lg"}>
                Trusted by leading employer brands
              </Text>
            </HStack>
          </Stack>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default Banner;
