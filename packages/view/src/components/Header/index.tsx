import { Flex, Box, Heading, IconButton } from "@radix-ui/themes";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { useTheme } from "@/store";
import Search from "./Search";

function HeaderToolBox({ className }: { className: string }) {
  const theme = useTheme((state) => state.theme);
  const toogleTheme = useTheme((state) => state.toggleTheme);

  const handleToogleTheme = () => {
    toogleTheme();
  };

  return (
    <Flex className={className} justify="end" gap="4">
      <IconButton
        onClick={handleToogleTheme}
        size="2"
        variant="ghost"
        color="gray"
        highContrast
      >
        {theme === "dark" ? <MoonIcon /> : <SunIcon />}
      </IconButton>
    </Flex>
  );
}

export default function Header() {
  return (
    <Flex width="100%" height="8" justify="center" align="center">
      <Box className="flex-1 px-2">
        <Heading>DevTrove</Heading>
      </Box>
      <Flex className="flex-[2]" justify="center" align="center">
        <Search />
      </Flex>
      <HeaderToolBox className="flex-1 px-4" />
    </Flex>
  );
}
