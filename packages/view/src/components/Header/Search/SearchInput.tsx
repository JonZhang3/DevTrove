import React, { useState, useRef, useEffect } from "react";
import { TextField, Kbd } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { EnterIcon } from "@/icons";
import { useSearchState } from "@/store";

export interface SearchInputProps {
  defaultText?: string;
  onChange?(text: string): void;
}

export default function SearchInput({
  defaultText = "",
  onChange,
}: SearchInputProps) {
  const searching = useSearchState((state) => state.searching);
  const searchInputFocus = useSearchState((state) => state.searchInputFocus);

  const [searchText, setSearchText] = useState(defaultText);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchText(value);
    onChange?.(value);
  };

  useEffect(() => {
    if (searching) {
      inputRef.current?.focus();
    } else {
      inputRef.current?.blur();
    }
  }, [searching]);

  useEffect(() => {
    if (searchInputFocus) {
      inputRef.current?.focus();
    } else {
      inputRef.current?.blur();
    }
  }, [searchInputFocus]);

  useEffect(() => {
    setSearchText(defaultText);
  }, [defaultText]);

  return (
    <TextField.Root size="3">
      <TextField.Slot>
        <MagnifyingGlassIcon />
      </TextField.Slot>
      <TextField.Input
        ref={inputRef}
        size="3"
        color="gray"
        placeholder="Actions"
        value={searchText}
        onChange={handleOnChange}
      />

      <TextField.Slot>
        <Kbd className="min-h-[1.75em]">
          <EnterIcon />
        </Kbd>
      </TextField.Slot>
    </TextField.Root>
  );
}
