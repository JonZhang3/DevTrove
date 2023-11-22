import React from "react";
import {
  Flex,
  Card,
  Heading,
  Text,
  Avatar,
  Badge,
  Link,
  IconButton,
  HoverCard,
  Code,
} from "@radix-ui/themes";
import {
  ArrowRightIcon,
  PersonIcon,
  HomeIcon,
  CodeIcon,
} from "@radix-ui/react-icons";
import type { ProjectItemType } from "data";
import { string } from "@/utils";

interface ExtraItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  href?: string;
}

// 额外信息组件
const ExtraItem = React.forwardRef<HTMLButtonElement, ExtraItemProps>(
  (props, ref) => {
    const { href, children } = props;

    const handleClick = () => {
      href && window.open(href, "_blank");
    };

    return (
      <IconButton
        ref={ref}
        variant="ghost"
        className="text-[18px]"
        onClick={handleClick}
      >
        {children}
      </IconButton>
    );
  }
);

ExtraItem.displayName = "ExtraItem";

function ExtraCode({ code }: { code: string }) {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger>
        <IconButton variant="ghost" className="text-[18px]">
          <CodeIcon />
        </IconButton>
      </HoverCard.Trigger>
      <HoverCard.Content>
        <Code>{code}</Code>
      </HoverCard.Content>
    </HoverCard.Root>
  );
}

export interface ItemCardProps {
  item: ProjectItemType;
  onTagClick?: (tag: string) => void;
}

export default function ItemCard({ item, onTagClick }: ItemCardProps) {
  const handleTagClick = (tag: string) => {
    onTagClick?.(tag);
  };

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
              <Avatar
                src={item.logo}
                fallback={item.name.charAt(0)}
                color="gray"
                highContrast
              />
              <Heading size="4" className="truncate">
                {item.name}
              </Heading>
            </Flex>
            <Flex direction="row" justify="end" gap="3" className="flex-1">
              {item.homepage && (
                <ExtraItem href={item.homepage}>{<HomeIcon />}</ExtraItem>
              )}
              {item.code && <ExtraCode code={item.code} />}
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
          {item.description && (
            <Text
              color="gray"
              size="2"
              className="max-h-10 inline-block overflow-hidden text-ellipsis"
            >
              {item.description}
            </Text>
          )}
          {item.tags && (
            <Flex direction="row" gap="2" wrap="wrap">
              {item.tags.map((t, i) => (
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
