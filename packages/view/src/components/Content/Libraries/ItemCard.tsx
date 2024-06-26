import React from "react";
import {
  Flex,
  Card,
  Heading,
  Text,
  Badge,
  Link,
  Separator,
  Tooltip,
} from "@radix-ui/themes";
import { ArrowRightIcon, PersonIcon } from "@radix-ui/react-icons";
import type { LibraryItemType } from "data";
import { string } from "@/utils";
import { GroupIcon } from "@/icons";
import { langWithIcons, groups, Group, languages, Language } from "data";
import ExtraCode from "./ExtraCode";
import Homepage from "./Homepage";
import ExtraShare from "./ExtraShare";
import ItemAvatar from "@/components/ItemAvatar";

export interface ItemCardProps {
  item: LibraryItemType;
  onTagClick?: (tag: string) => void;
}

export default function ItemCard({ item, onTagClick }: ItemCardProps) {
  const handleTagClick = (tag: string) => {
    onTagClick?.(tag);
  };

  const group: string[] = [];
  let language = "";
  const tags: Array<string> = [];
  item.tags.forEach((tag) => {
    if (groups.includes(tag as Group)) {
      group.push(tag);
    } else if (languages.includes(tag as Language)) {
      language = tag;
    } else {
      tags.push(tag);
    }
  });
  const LangIcon: React.FC<{ size?: number }> | null = language
    ? langWithIcons[language]
    : null;

  return (
    <Card className="w-full min-w-[300px]" variant="classic">
      <Flex direction="column" gap="2" justify="between" className="h-full">
        <Flex direction="column" align="start" gap="2">
          <Flex direction="row" gap="2" className="w-full">
            <Flex
              direction="column"
              gap="2"
              className="max-w-[50%] overflow-hidden"
            >
              <ItemAvatar logo={item.logo} name={item.name} />
              <Heading size="4" className="truncate">
                {item.name}
              </Heading>
            </Flex>
            <Flex direction="row" justify="end" gap="4" className="flex-1">
              {item.homepage && <Homepage homepage={item.homepage} />}
              {item.code && <ExtraCode code={item.code} />}
              <ExtraShare item={item} />
            </Flex>
          </Flex>
          {item.author && (
            <Link
              href={item.author_github}
              target="_blank"
              className="flex items-center gap-x-1"
            >
              <PersonIcon className="align-middle" />
              <Text size="2">{item.author}</Text>
            </Link>
          )}
          <Flex direction="row" gap="2" className="items-center">
            {group && (
              <Flex direction="row" gap="1" className="items-center">
                <GroupIcon />
                {group.map((g, i) => (
                  <Text size="2" key={i}>
                    {`${g}${i === group.length - 1 ? "" : " / "}`}
                  </Text>
                ))}
              </Flex>
            )}
            <Separator orientation="vertical" />
            {LangIcon && (
              <Flex direction="row" gap="1" className="items-center">
                <LangIcon size={15} />
                <Text size="2">{language}</Text>
              </Flex>
            )}
          </Flex>
          {item.description && (
            <Tooltip content={item.description} className="max-w-xs">
              <Text color="gray" size="2" className="truncate-2-lines">
                {item.description}
              </Text>
            </Tooltip>
          )}
          {item.tags && (
            <Flex direction="row" gap="2" wrap="wrap">
              {tags.map((t, i) => (
                <Badge
                  className="cursor-pointer"
                  onClick={() => handleTagClick(t)}
                  key={i}
                  variant="soft"
                  color="gray"
                  highContrast
                >
                  {string.capitalize(t)}
                </Badge>
              ))}
            </Flex>
          )}
        </Flex>
        <Flex direction="column" gap="1" align="end" className="w-full">
          {item.articles && item.articles.length > 0 && (
            <Link highContrast underline="always" size="2">
              Articles <ArrowRightIcon className="align-middle" />
            </Link>
          )}
          {item.notes && item.notes.length > 0 && (
            <Link highContrast underline="always" size="2">
              Notes <ArrowRightIcon className="align-middle" />
            </Link>
          )}
        </Flex>
      </Flex>
    </Card>
  );
}
