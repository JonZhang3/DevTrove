import { useState, useEffect } from "react";
import { Flex, Text, TextField, Kbd } from "@radix-ui/themes";
import { Dialog } from "@/components";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import { EnterIcon } from "@/icons";
import { useSearchState, useData } from "@/store";
import SearchInput from "./SearchInput";

export default function Search() {
  const searching = useSearchState((state) => state.searching);
  const setSearching = useSearchState((state) => state.setSearching);
  const searchText = useData((state) => state.searchText);
  const setSearchText = useData((state) => state.setSearchText);
  const toSearch = useData((state) => state.toSearch);
  const searchInputFocus = useSearchState((state) => state.searchInputFocus);

  const [innerSearchText, setInnerSearchText] = useState(searchText);

  // TODO 使用 esc 关闭 dialog 时不会触发
  const handleSearchDialogOpenChange = (open: boolean) => {
    setSearching(open);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (searchInputFocus && innerSearchText) {
      if (["Enter", "Escape"].includes(e.key)) {
        e.preventDefault();
      }
      if (e.key === "Enter") {
        setSearchText(innerSearchText);
        setSearching(false);
        setTimeout(() => toSearch(), 0);
      } else if (e.key === "Escape") {
        setSearchText("");
      }
    } else {
      if (e.key === "Escape") {
        e.preventDefault();
        setSearching(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <>
      <Flex
        direction="row"
        justify="between"
        align="center"
        className={clsx(
          "w-[50%] min-w-[400px] px-2 py-1 bg-gray-2",
          "select-none rounded-1 cursor-pointer",
          "border border-gray-4",
          "hover:bg-gray-4"
        )}
        onClick={() => setSearching(true)}
      >
        <MagnifyingGlassIcon />
        <Text color="gray" size="2">
          Search
        </Text>
        <TextField.Slot>
          <Kbd className="min-h-[1.75em]">/</Kbd>
        </TextField.Slot>
      </Flex>
      <Dialog
        open={searching}
        onOpenChange={handleSearchDialogOpenChange}
        overlayClassName="items-start pt-2"
      >
        <Flex direction="column" gap="5">
          <SearchInput
            defaultText={innerSearchText}
            onChange={(text) => {
              setInnerSearchText(text);
            }}
          />
          {/* <Items onSelected={(label) => setInnerSearchText(label)} /> */}
          <Operations />
        </Flex>
      </Dialog>
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// function Items({ onSelected }: { onSelected?: (label: string) => void }) {
//   const focusSearchInput = useSearchState((state) => state.focusSearchInput);

//   const [selectedIndex, setSelectedIndex] = useState(-1);
//   const items = [
//     { text: "Search by tag", label: "tag:" },
//     { text: "Search by programming languages", label: "lang:" },
//   ];

//   const handleKeyDown = (e: KeyboardEvent) => {
//     if (["ArrowDown", "ArrowUp", "Enter"].includes(e.key)) {
//       e.preventDefault();
//       e.stopPropagation();
//     }
//     if (e.key === "ArrowDown") {
//       focusSearchInput(false);
//       setSelectedIndex((prev) => (prev + 1 > items.length - 1 ? 0 : prev + 1));
//     } else if (e.key === "ArrowUp") {
//       focusSearchInput(false);
//       setSelectedIndex((prev) => (prev - 1 < 0 ? items.length - 1 : prev - 1));
//     } else if (e.key === "Enter") {
//       focusSearchInput(true);
//       const index = selectedIndex;
//       setSelectedIndex(-1);
//       index > -1 && onSelected?.(items[index].label);
//     }
//   };

//   const handleClick = (index: number) => {
//     setSelectedIndex(index);
//     index > -1 && onSelected?.(items[index].label);
//   };

//   useEffect(() => {
//     document.addEventListener("keydown", handleKeyDown);
//     return () => document.removeEventListener("keydown", handleKeyDown);
//   });

//   return (
//     <Flex direction="column" gap="1">
//       {items.map((item, index) => (
//         <Box
//           className={clsx("p-2 rounded-1 cursor-pointer", {
//             "bg-gray-3": selectedIndex === index,
//           })}
//           onClick={() => handleClick(index)}
//           key={index}
//         >
//           <Text size="3">{item.text}</Text>
//         </Box>
//       ))}
//     </Flex>
//   );
// }

function Operations() {
  return (
    <Flex direction="row" gap="4">
      <Flex direction="row" gap="2">
        <Kbd>↑</Kbd>
        <Kbd>↓</Kbd>
        <Text size="2" color="gray">
          to navigate
        </Text>
      </Flex>
      <Flex direction="row" gap="2">
        <Kbd className="min-h-[1.75em]">
          <EnterIcon />
        </Kbd>
        <Text size="2" color="gray">
          to select / search
        </Text>
      </Flex>
      <Flex direction="row" gap="2">
        <Kbd>Esc</Kbd>
        <Text size="2" color="gray">
          close
        </Text>
      </Flex>
    </Flex>
  );
}
