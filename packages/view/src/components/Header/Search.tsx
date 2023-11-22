import { useState, useRef, useEffect } from "react";
import { Flex, Box, Text, TextField, Kbd } from "@radix-ui/themes";
import { Dialog } from "@/components";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import { EnterIcon } from "@/icons";
import { useSearchState, useData } from "@/store";

function SearchInput() {
  const searching = useSearchState((state) => state.searching);
  const searchText = useData((state) => state.searchText);
  const setSearchText = useData((state) => state.setSearchText);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searching) {
      inputRef.current?.focus();
    } else {
      inputRef.current?.blur();
    }
  }, [searching]);

  return (
    <TextField.Root size="3">
      <TextField.Slot>
        <MagnifyingGlassIcon />
      </TextField.Slot>
      <TextField.Input
        ref={inputRef}
        size="3"
        color="gray"
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <TextField.Slot>
        <Kbd className="min-h-[1.75em]">
          <EnterIcon />
        </Kbd>
      </TextField.Slot>
    </TextField.Root>
  );
}

export default function Search() {
  const searching = useSearchState((state) => state.searching);
  const setSearching = useSearchState((state) => state.setSearching);
  const searchText = useData((state) => state.searchText);
  const setSearchText = useData((state) => state.setSearchText);
  const toSearch = useData((state) => state.toSearch);

  const handleSearchDialogOpenChange = (open: boolean) => {
    setSearching(open);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    // to search
    if (searchText) {
      if (["Enter", "Escape"].includes(e.key)) {
        e.preventDefault();
        e.stopPropagation();
      }
      if (e.key === "Enter") {
        setTimeout(() => toSearch(), 0);
      } else if (e.key === "Escape") {
        setSearchText("");
      }
    } else {
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
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
        className={clsx()}
        overlayClassName="items-start pt-2"
      >
        <Flex direction="column" gap="5">
          <SearchInput />
          <Items onSelected={(label) => setSearchText(label)} />
          <Operations />
        </Flex>
      </Dialog>
    </>
  );
}

function Items({ onSelected }: { onSelected?: (label: string) => void }) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const items = [
    { text: "Search by tag", label: "tag:" },
    { text: "Search by programming languages", label: "lang:" },
  ];

  const handleKeyDown = (e: KeyboardEvent) => {
    if (["ArrowDown", "ArrowUp", "Enter"].includes(e.key)) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (e.key === "ArrowDown") {
      setSelectedIndex((prev) => (prev + 1 > items.length - 1 ? 0 : prev + 1));
    } else if (e.key === "ArrowUp") {
      setSelectedIndex((prev) => (prev - 1 < 0 ? items.length - 1 : prev - 1));
    } else if (e.key === "Enter") {
      selectedIndex > -1 && onSelected?.(items[selectedIndex].label);
    }
  };

  const handleClick = (index: number) => {
    setSelectedIndex(index);
    index > -1 && onSelected?.(items[index].label);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <Flex direction="column" gap="1">
      {items.map((item, index) => (
        <Box
          className={clsx("p-2 rounded-1 cursor-pointer", {
            "bg-gray-3": selectedIndex === index,
          })}
          onClick={() => handleClick(index)}
          key={index}
        >
          <Text size="3">{item.text}</Text>
        </Box>
      ))}
    </Flex>
  );
}

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
        <Kbd>esc</Kbd>
        <Text size="2" color="gray">
          clear input / close
        </Text>
      </Flex>
    </Flex>
  );
}
