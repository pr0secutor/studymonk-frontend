import Footer from "@/components/Footer";
import { data } from "@/data";
import {
  Button,
  Card,
  CardBody,
  Flex,
  Grid,
  Heading,
  SimpleGrid,
  Table,
  Tbody,
  Td,
  Text,
  Tr,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import React, { useEffect, useState } from "react";

const CandSearch = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(data);

  let locationFilters = [
    "Gurgaon",
    "Delhi",
    "Meerut",
    "Bangalore",
    "Hyderabad",
  ];
  let roleFilters = ["SDE", "Lawyer", "Accountant", "Doctor", "UI/UX"];

  const handFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = data.filter(
          (item) =>
            item?.location === selectedCategory ||
            item?.role === selectedCategory
        );
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...data]);
    }
  };

  return (
    <>
    <Flex w={"100%"} minH={"100vh"} justifyContent={"space-between"} alignItems={"center"} p={4}>
      <Flex flexDirection={"column"} justifyContent={"center"} shadow={"md"} h={"fit-content"}>
        <VStack justifyContent={"center"} spacing={3} m={3} alignItems={"flex-start"}>
          <Heading fontSize={"md"}>Locations</Heading>
          <Grid templateColumns="repeat(2, 1fr)" gap={3}>
            {locationFilters.map((category, i) => {
              return (
                <Button
                  key={i}
                  colorScheme="gray"
                  variant={"outline"}
                  size={"xs"}
                  _hover={{}}
                  sx={
                    selectedFilters?.includes(category)
                      ? { bgColor: "#1455FD", color: "white" }
                      : {}
                  }
                  onClick={() => handFilterButtonClick(category)}
                >
                  {category}
                </Button>
              );
            })}
          </Grid>
        </VStack>
        <VStack justifyContent={"center"} spacing={3} m={3} alignItems={"flex-start"}>
          <Heading fontSize={"md"}>Roles</Heading>
          <Grid templateColumns="repeat(2, 1fr)" gap={3}>
            {roleFilters.map((category, i) => {
              return (
                <Button
                  key={i}
                  colorScheme="gray"
                  variant={"outline"}
                  size={"xs"}
                  _hover={{}}
                  sx={
                    selectedFilters?.includes(category)
                      ? { bgColor: "#1455FD", color: "white" }
                      : {}
                  }
                  onClick={() => handFilterButtonClick(category)}
                >
                  {category}
                </Button>
              );
            })}
          </Grid>
        </VStack>
      </Flex>
      <Flex w={"70%"} flexDirection={"column"} justifyContent={"center"}>
        <Heading fontSize={"3xl"}>Candidates</Heading>
        <Table pos={"relative"}>
          <Tbody>
            {filteredItems.map((item, i) => {
              return (
                <Tr key={i}>
                  <Td>{item.name}</Td>
                  <Td>{item.role}</Td>
                  <Td>{item.location}</Td>
                </Tr>
              );
            })}
            <Tr></Tr>
          </Tbody>
        </Table>
      </Flex>
    </Flex>
    <Footer/>
    </>
  );
};

export default CandSearch;
