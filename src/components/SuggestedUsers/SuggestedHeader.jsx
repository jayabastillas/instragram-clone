import { Link as RouterLink } from "react-router-dom";
import { Avatar, Flex, Text, Link, Button } from "@chakra-ui/react";
import useLogout from "../../hooks/useLogout";
import useAuthStore from "../../store/authStore";

const SuggestedHeader = () => {
    const { handleLogout, isLoggingOut } = useLogout();
    const authUser = useAuthStore(state => state.user);

    if (!authUser) return null;

    return (
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
            <Flex alignItems={"center"} gap={2}>
                <Avatar src={authUser.profilePicURL} size={"lg"} />
                <Text fontSize={12} fontWeight={"bold"}>
                    {authUser.username}
                </Text>
            </Flex>
            <Button
                size={"xs"}
                background={"transparent"}
                _hover={{ background: "transparent" }}
                fontSize={14}
                fontWeight={"medium"}
                color={"blue.400"}
                cursor={"pointer"}
                isLoading={isLoggingOut}
                onClick={handleLogout}>
                Log out
            </Button>
        </Flex>
    );
};

export default SuggestedHeader;
