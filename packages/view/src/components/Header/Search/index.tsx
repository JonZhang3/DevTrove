import { useState, useEffect } from "react";
import { Flex, Text, Kbd } from "@radix-ui/themes";
import { Dialog } from "@/components";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import { EnterIcon } from "@/icons";
import { useSearchState, useData } from "@/store";
import SearchInput from "./SearchInput";
import { DynamicIcon } from "icons";

export default function Search() {
  const searching = useSearchState((state) => state.searching);
  const setSearching = useSearchState((state) => state.setSearching);
  const toSearch = useData((state) => state.toSearch);
  const searchInputFocus = useSearchState((state) => state.searchInputFocus);

  const [innerSearchText, setInnerSearchText] = useState("");

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
        setSearching(false);
        setTimeout(() => toSearch(innerSearchText), 0);
      } else if (e.key === "Escape") {
        setInnerSearchText("");
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
          "border border-gray-3",
          "hover:bg-gray-3"
        )}
        onClick={() => setSearching(true)}
      >
        <MagnifyingGlassIcon />
        <Text color="gray" size="2">
          Quick Action
        </Text>
        <Kbd className="min-h-[1.75em]">/</Kbd>
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
          <Items onSelected={(label) => setInnerSearchText(label)} />
          <Operations />
        </Flex>
      </Dialog>
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Items({ onSelected }: { onSelected?: (label: string) => void }) {
  const focusSearchInput = useSearchState((state) => state.focusSearchInput);

  const [selectedIndex, setSelectedIndex] = useState(-1);
  const items = [
    { text: "Search NPM packages", label: "npm:", icon: "NpmIcon" },
    { text: "Search Maven packages", label: "mvn:", icon: "MavenIcon" },
    { text: "Search Rust crate", label: "cargo:", icon: "RustIcon" },
    { text: "Search Python packages", label: "python:", icon: "PythonIcon" },
  ];

  const handleKeyDown = (e: KeyboardEvent) => {
    if (["ArrowDown", "ArrowUp", "Enter"].includes(e.key)) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (e.key === "ArrowDown") {
      focusSearchInput(false);
      setSelectedIndex((prev) => (prev + 1 > items.length - 1 ? 0 : prev + 1));
    } else if (e.key === "ArrowUp") {
      focusSearchInput(false);
      setSelectedIndex((prev) => (prev - 1 < 0 ? items.length - 1 : prev - 1));
    } else if (e.key === "Enter") {
      focusSearchInput(true);
      const index = selectedIndex;
      setSelectedIndex(-1);
      index > -1 && onSelected?.(items[index].label);
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
        <Flex
          direction="row"
          gap="2"
          className={clsx("p-2 rounded-1 cursor-pointer items-center", {
            "bg-gray-3": selectedIndex === index,
          })}
          onClick={() => handleClick(index)}
          key={index}
        >
          <DynamicIcon name={item.icon} size={20} />
          <Text size="3">{item.text}</Text>
        </Flex>
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
        <Kbd>Esc</Kbd>
        <Text size="2" color="gray">
          close
        </Text>
      </Flex>
    </Flex>
  );
}
