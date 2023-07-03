import { Button, Flex, HStack, Heading } from "@chakra-ui/react";
import React from "react";

import { SunIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

const Header = () => {
    const router = useRouter();


  return (
    <Flex
      as={"nav"}
      w={"100%"}
      h={24}
      bgColor={"#061237"}
      justifyContent={"space-between"}
      p={8}
    >
      <HStack spacing={1}>
        <SunIcon color={"#1455FD"} />
        <Heading color={"white"} fontSize={"2xl"}>Talent Port</Heading>
      </HStack>
      <HStack>
        <Button
          color={"white"}
          variant={"ghost"}
          colorScheme="messenger"
          _active={{}}
          _hover={{}}
          onClick={() => router.push("/signin")}
        >
          Sign In
        </Button>
        <Button
          variant={"solid"}
          size={"md"}
          color={"white"}
          bgColor={"#1455FD"}
          _hover={{}}
          onClick={() => router.push("/signup")}
        >
          Sign Up
        </Button>
      </HStack>
    </Flex>
  );
};

export default Header;
