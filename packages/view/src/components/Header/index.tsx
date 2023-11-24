import { Flex, Box, Heading } from "@radix-ui/themes";
import Search from "./Search";
import HeaderToolBox from "./HeaderToolBox";

export default function Header() {
  return (
    <Flex width="100%" height="8" justify="center" align="center">
      <Box className="flex-1 px-2">
        <Heading size="5">DevTrove</Heading>
      </Box>
      <Flex className="flex-[2]" justify="center" align="center">
        <Search />
      </Flex>
      <HeaderToolBox className="flex-1 px-4" />
    </Flex>
  );
}
