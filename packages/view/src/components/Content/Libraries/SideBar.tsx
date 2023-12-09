import React, { useState } from "react";
import { Flex, Grid, Text, Heading, Badge, Button } from "@radix-ui/themes";
import * as Accordion from "@radix-ui/react-accordion";
import {
  ChevronDownIcon,
  TrashIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import clsx from "clsx";
import { groups, languages, langWithIcons } from "data";
import { tags, useData } from "@/store";
import { string } from "@/utils";
import { GroupIcon, ProgramLangIcon, TagsIcon } from "@/icons";

import type {
  AccordionItemProps as RadixAccordionItemProps,
  AccordionTriggerProps as RadixAccordionTriggerProps,
  AccordionContentProps as RadixAccordionContentProps,
} from "@radix-ui/react-accordion";

export interface SideBarWidthProps {
  width?: string;
  className?: string;
}

// 条件可以同时存在
export default function SideBar({
  width = "250px",
  className,
}: SideBarWidthProps) {
  const searchText = useData((state) => state.searchText);
  const selectedGroups = useData((state) => state.selectedGroups);
  const selectGroup = useData((state) => state.selectGroup);
  const selectedLangs = useData((state) => state.selectedLangs);
  const selectLang = useData((state) => state.selectLang);
  const selectedTags = useData((state) => state.selectedTags);
  const selectTag = useData((state) => state.selectTag);
  const clearFilters = useData((state) => state.clearFilters);

  const filterCount =
    selectedGroups.length +
    selectedLangs.length +
    selectedTags.length +
    (searchText ? 1 : 0);

  const [opend, setOpendValue] = useState<Array<string>>([
    "groups",
    "langs",
    "tags",
  ]);
  const handleOpendChange = (value: Array<string>) => {
    setOpendValue(value);
  };

  return (
    <Flex direction="column" gap="2" className={className}>
      <Accordion.Root
        type="multiple"
        value={opend}
        onValueChange={handleOpendChange}
        style={{ width }}
      >
        <AccordionItem value="groups">
          <AccordionTrigger title="Groups" icon={<GroupIcon />} />
          <AccordionContent>
            <Grid columns="2" gap="4">
              {groups.map((group, index) => (
                <BlockItem
                  title={group}
                  checked={selectedGroups.includes(group)}
                  key={index}
                  onClick={() => selectGroup(group)}
                />
              ))}
            </Grid>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="langs">
          <AccordionTrigger title="Languages" icon={<ProgramLangIcon />} />
          <AccordionContent>
            <Grid columns="2" gap="4">
              {languages.map((lang, index) => (
                <BlockItem
                  icon={langWithIcons[lang]}
                  title={lang}
                  checked={selectedLangs.includes(lang)}
                  key={index}
                  onClick={() => selectLang(lang)}
                />
              ))}
            </Grid>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="tags">
          <AccordionTrigger title="Tags" icon={<TagsIcon />} />
          <AccordionContent>
            <Flex wrap="wrap" gap="2" align="center" justify="start">
              {tags.map((t, index) => (
                <Badge
                  key={index}
                  variant={selectedTags.includes(t[0]) ? "solid" : "soft"}
                  color="gray"
                  highContrast
                  className="cursor-pointer"
                  onClick={() => selectTag(t[0])}
                >
                  {`${string.capitalize(t[0])} (${t[1]})`}
                </Badge>
              ))}
            </Flex>
          </AccordionContent>
        </AccordionItem>
      </Accordion.Root>
      <Flex
        direction="row"
        gap="1"
        className={clsx("h-[24px] items-center justify-between", {
          hidden: filterCount === 0,
        })}
      >
        <div
          className={clsx(
            "flex-1 flex gap-1 flex-row items-center overflow-hidden",
            {
              "opacity-0": !searchText,
            }
          )}
        >
          <MagnifyingGlassIcon />
          <Text size="1" className="flex-1 truncate">
            {searchText}
          </Text>
        </div>

        <Button
          size="1"
          variant="ghost"
          className="m-0"
          onClick={() => clearFilters()}
        >
          <TrashIcon />
          <Text size="1">
            Clear {filterCount} {filterCount > 1 ? "filters" : "filter"}
          </Text>
        </Button>
      </Flex>
    </Flex>
  );
}

function AccordionItem({ value, children, ...props }: RadixAccordionItemProps) {
  return (
    <Accordion.Item className={clsx("item")} value={value} {...props}>
      {children}
    </Accordion.Item>
  );
}

function AccordionTrigger({
  title,
  icon,
  children,
  ...props
}: RadixAccordionTriggerProps & { icon?: React.ReactElement }) {
  let trigger = children;
  if (title) {
    trigger = (
      <Flex direction="row" gap="1" className="items-center">
        {icon && React.cloneElement(icon, { size: 17 })}
        <Heading size="3">{title}</Heading>
      </Flex>
    );
  }

  return (
    <Accordion.Header className="w-full">
      <Accordion.Trigger
        className="group w-full flex items-center justify-between py-2"
        {...props}
      >
        {trigger}
        <ChevronDownIcon className="transition-transform duration-300 group-data-[state=open]:rotate-180" />
      </Accordion.Trigger>
    </Accordion.Header>
  );
}

function AccordionContent({
  children,
  className,
  ...props
}: RadixAccordionContentProps) {
  return (
    <Accordion.Content
      className={clsx(className, "w-full py-1 px-1")}
      {...props}
    >
      {children}
    </Accordion.Content>
  );
}

function BlockItem({
  icon: Icon,
  title,
  checked = false,
  onClick,
}: {
  icon?: React.FC<{ size: number }>;
  title?: string;
  checked?: boolean;
  onClick?(): void;
}) {
  return (
    <div
      data-checked={checked ? "checked" : "unchecked"}
      className={clsx(
        "flex gap-1 items-center justify-center p-2 rounded-2 cursor-pointer select-none",
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
