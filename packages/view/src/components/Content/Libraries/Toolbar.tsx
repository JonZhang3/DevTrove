import React from "react";
import { Flex } from "@radix-ui/themes";
import clsx from "clsx";

export interface ToolbarProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Toolbar({ className }: ToolbarProps) {
  return (
    <Flex
      direction="row"
      className={clsx("w-full py-2", className)}
      justify="end"
      gap="2"
    >
      {/* {searchText && (
        <Flex gap="1" align="center" className="max-w-[120px] overflow-hidden">
          <Filter size={16} strokeWidth={1.5} />
          <Text size="2" color="gray" className="truncate">
            {searchText}
          </Text>
          <Cross1Icon fontSize="16" />
        </Flex>
      )} */}
    </Flex>
  );
}
