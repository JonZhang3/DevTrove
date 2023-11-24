import { Flex, IconButton } from "@radix-ui/themes";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { useTheme } from "@/store";

export interface HeaderToolBoxProp {
  className: string;
}

export default function HeaderToolBox({ className }: HeaderToolBoxProp) {
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
