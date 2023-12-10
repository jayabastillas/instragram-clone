import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
    return (
        <VStack py={8} px={6} gap={4}>
            <SuggestedHeader />
            <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
                <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
                    Suggested for you
                </Text>
                <Text fontSize={12} fontWeight={"bold"} _hover={{ color: "gray.400" }} cursor={"pointer"}>
                    See All
                </Text>
            </Flex>

            <SuggestedUser name="Dan Abrahmov" followers={201} avatar="https://bit.ly/dan-abramov" />
            <SuggestedUser name="Ryan Florence" followers={500} avatar="https://bit.ly/ryan-florence" />
            <SuggestedUser name="Christian Nwamba" followers={404} avatar="https://bit.ly/code-beast" />

            <Box alignSelf={"start"} fontSize={12} color={"gray.500"} mt={5}>
                &copy; 2023 Built By{" "}
                <Link href="#" target="_blank" color={"blue.500"} fontSize={14}>
                    unknownfury
                </Link>
            </Box>
        </VStack>
    );
};

export default SuggestedUsers;
