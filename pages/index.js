import Head from "next/head";
import { Inter } from "next/font/google";
import {
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from "framer-motion";

export default function Home() {
  const [isSmallerThan580] = useMediaQuery("(max-width:580px)");
  console.log(isSmallerThan580);
  return (
    <>
      <Header />
      <Flex
        w={"100%"}
        h={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDir={"column"}
      >
        <Banner />
        <VStack w={"100%"} spacing={4} mt={10} mb={10} p={4}>
          <Heading as="h2" size={{ base: "sm", lg: "md" }} color={"gray.500"}>
            We are an award winning platform trusted by leading employer brands
          </Heading>
          <Flex
            flexDir={{ base: "column", md: "row" }}
            m={5}
            gap={20}
            w={"100%"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
          >
            <PartnerImage src="brands/Apple.svg" />
            <PartnerImage src="brands/Adobe.svg" />
            <PartnerImage src="brands/Google.svg" />
            <PartnerImage src="brands/Samsung.svg" />
            <PartnerImage src="brands/Microsoft.svg" />
          </Flex>
        </VStack>

        <Flex
          flexDirection={{ base: "column", md: "row" }}
          w={"90%"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          mt={10}
          mb={10}
          gap={24}
        >
          <VStack
            as={motion.div}
            alignItems={"flex-start"}
            spacing={5}
            maxW={"500px"}
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
          >
            <HStack>
              <Image src="line.svg" alt="line_svg" w={"20px"} />
              <Heading as="h3" size={"md"} color={"#1455FD"}>
                Strategic Enhancement
              </Heading>
            </HStack>
            <Heading as="h2" size={{ base: "xl", lg: "2xl" }}>
              Fill more vacancies in a shorter time.
            </Heading>
            <Text fontSize={"md"} color={"gray.500"}>
              We are a strateigc enhancement to your applicant tracking system.
              Consolidate your recruitment activities on one single platform and
              build talent pools - for long-term success in recruitment
            </Text>
          </VStack>
          <Image
            as={motion.img}
            src="undraw_resume.svg"
            alt="Feature Image"
            width={{ base: "280px", md: "350px", lg: "400px" }}
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
          />
        </Flex>

        <Flex
          flexDirection={{ base: "column", md: "row-reverse" }}
          w={"90%"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          mt={10}
          mb={10}
          gap={24}
        >
          <VStack
            as={motion.div}
            alignItems={"flex-start"}
            spacing={5}
            maxW={"500px"}
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
          >
            <HStack>
              <Image src="line.svg" alt="line_svg" w={"20px"} />
              <Heading as="h3" size={"md"} color={"#1455FD"}>
                Tools and Systems
              </Heading>
            </HStack>
            <Heading as="h2" size={{ base: "xl", lg: "2xl" }}>
              Recruiting tools and tracking systems
            </Heading>
            <Text fontSize={"md"} color={"gray.500"}>
              We are fully integrated with other recruiting tools and applicant
              tracking systems. For your ease of recruiting the best talent for
              your company&apos;s success.
            </Text>
          </VStack>
          <Image
            as={motion.img}
            src="undraw_innovative.svg"
            alt="Feature Image"
            width={{ base: "280px", md: "350px", lg: "400px" }}
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
          />
        </Flex>

        <Flex
          as={motion.div}
          flexDirection={{ base: "column", md: "row" }}
          w={"100%"}
          mt={10}
          mb={10}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, transition: { duration: 0.6 } }}
        >
          <VStack
            spacing={4}
            w={"320px"}
            alignItems={"flex-start"}
            m={{ base: 4, sm: 8 }}
          >
            <HStack>
              <Image src="line.svg" alt="line_svg" w={"20px"} />
              <Heading as="h3" size={"md"} color={"#1455FD"}>
                Solution Challenge
              </Heading>
            </HStack>
            <Heading as="h2" size={{ base: "lg", sm: "xl" }}>
              A solution for every recruitment Challenge
            </Heading>
            <Button
              size={"md"}
              color={"white"}
              bgColor={"#1455FD"}
              _hover={{ bgColor: "gray.300", color: "black" }}
            >
              See All
            </Button>
          </VStack>
          <VStack w={"300px"} alignItems={"flex-start"} m={{ base: 4, sm: 8 }}>
            <Image src="sourcing.jpg" alt="Soluiton Pic" w={"240px"} />
            <Heading as="h2" size={"xl"}>
              Talent Sourcing
            </Heading>
            <Text fontSize={"md"} color={"gray.500"}>
              With us, you consolidate all talent soucing activities on one
              central platform
            </Text>
          </VStack>
          <VStack w={"300px"} alignItems={"flex-start"} m={{ base: 4, sm: 8 }}>
            <Image src="mobility.jpg" alt="Soluiton Pic" w={"240px"} />
            <Heading as="h2" size={"xl"}>
              Internal Mobility
            </Heading>
            <Text fontSize={"md"} color={"gray.500"}>
              With us, you create a transparent internal mobility programme that
              encourages participation. Sourcing the team becomes easy.
            </Text>
          </VStack>
        </Flex>
      </Flex>
      <Footer />
    </>
  );
}

function PartnerImage({ src }) {
  return (
    <Image
      filter={"grayscale(100%)"}
      src={src}
      width={{ base: "250px", md: "90px", lg: "120px" }}
      alt="partner brand"
    />
  );
}
