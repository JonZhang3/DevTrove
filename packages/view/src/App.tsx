import { useEffect } from "react";
import { Flex } from "@radix-ui/themes";
import { Theme } from "@radix-ui/themes";
import { Header, Content } from "@/components";
import { useSearchState, useTheme } from "@/store";

function App() {
  const setSearching = useSearchState((state) => state.setSearching);
  const theme = useTheme((state) => state.theme);

  useEffect(() => {
    document.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.key === "/") {
        e.preventDefault();
        setSearching(true);
      } else if (e.key === "Escape") {
        e.preventDefault();
        setSearching(false);
      }
    });
  });

  return (
    <Theme
      className="h-full w-full"
      appearance={theme}
      accentColor="gray"
      color="gray"
    >
      <Flex className="h-full w-full" direction="column">
        <Header />
        <Content />
      </Flex>
    </Theme>
  );
}

export default App;
