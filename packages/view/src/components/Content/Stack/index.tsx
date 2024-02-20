import React from "react";
import clsx from "clsx";
import { Flex, Text } from "@radix-ui/themes";
import type { IconProps } from "icons";
import {
  techStacks,
  techStackWithIcons,
  tectStackData,
  LibraryItemType,
} from "data";
import { useData } from "@/store";
import StackGroup from "./StackGroup";

export default function Content() {
  const selectedStack = useData((state) => state.selectedStack);
  const sideBarWidth = 150;

  return (
    <div className="flex-1 p-4 overflow-auto relative">
      <div className="flex gap-3 flex-row w-[80%] mx-auto relative">
        <SideBar width={`${sideBarWidth}px`} className="h-full fixed" />
        <Flex
          direction="column"
          className="flex-1"
          style={{ paddingLeft: `${sideBarWidth + 22}px` }}
        >
          {tectStackData[selectedStack].stack.map((item, index) => (
            <StackGroup
              title={item.title}
              stacks={
                tectStackData[selectedStack][item.key] as Array<LibraryItemType>
              }
              key={index}
            />
          ))}
        </Flex>
      </div>
    </div>
  );
}

function SideBar({
  width = "150px",
  className,
}: {
  width: string;
  className?: string;
}) {
  const selectedStack = useData((state) => state.selectedStack);
  const selectStack = useData((state) => state.selectStack);

  return (
    <Flex
      direction="column"
      gap="2"
      className={clsx(
        className,
        "overflow-auto pb-2 pr-3"
        // "border-r border-gray-6"
      )}
      style={{ width }}
    >
      {techStacks.map((stack) => (
        <SideBarItem
          title={stack}
          icon={techStackWithIcons[stack]}
          key={stack}
          checked={selectedStack === stack}
          onClick={() => selectStack(stack)}
        />
      ))}
    </Flex>
  );
}

function SideBarItem({
  icon: Icon,
  title,
  checked = false,
  onClick,
}: {
  icon?: React.FC<IconProps>;
  title?: string;
  checked?: boolean;
  onClick?(): void;
}) {
  return (
    <div
      data-checked={checked ? "checked" : "unchecked"}
      className={clsx(
        "w-full flex gap-1 items-center justify-center p-2 rounded-2 cursor-pointer select-none",
        { "bg-accent-2 hover:bg-accent-3": !checked },
        { "bg-accent-12 hover:bg-accent-12 text-accent-1": checked }
      )}
      onClick={() => onClick?.()}
    >
      {Icon && <Icon size={18} />}
      <Text size="2">{title}</Text>
    </div>
  );
}
