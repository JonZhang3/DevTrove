import { Flex, Heading } from "@radix-ui/themes";
import Search from "./Search";
import HeaderToolBox from "./HeaderToolBox";
import Menus from "./Menus";

export default function Header() {
  return (
    <Flex width="100%" height="8" justify="center" align="center">
      <Flex direction="row" gap="5" className="flex-1 px-2 h-full items-center">
        <Heading size="5">DevTrove</Heading>
        <Menus />
      </Flex>
      <Flex className="flex-1" justify="center" align="center">
        <Search />
      </Flex>
      <HeaderToolBox className="flex-1 px-4" />
    </Flex>
  );
}
