import {
  Flex,
  Heading,
  Card,
  Grid,
  Button,
  Tooltip,
  Text,
} from "@radix-ui/themes";
import type { LibraryItemType } from "data";
import clsx from "clsx";
import ItemAvatar from "@/components/ItemAvatar";
import { HomeIcon, StarIcon, Component1Icon } from "@radix-ui/react-icons";
import { formatStars } from "@/utils/utils";

export interface StackGroupProps {
  title: string;
  stacks?: Array<LibraryItemType>;
  isLast?: boolean;
}

export default function StackGroup({ title, isLast, stacks }: StackGroupProps) {
  return (
    <Flex
      direction="column"
      className={clsx("py-4", {
        "border-b border-gray-6 border-dashed": !isLast,
      })}
    >
      <Heading size="5" className="pb-2">
        {title}
      </Heading>
      <Grid
        columns={{
          xl: "3",
          lg: "2",
          md: "1",
        }}
        gap="5"
      >
        {stacks?.map((item, index) => (
          <Item data={item} key={index} />
        ))}
      </Grid>
    </Flex>
  );
}

function Item({ data }: { data: LibraryItemType }) {
  return (
    <Card className="w-full min-w-[300px] px-2" variant="classic">
      <Flex direction="column">
        <Flex direction="row" className="flex-1">
          <Flex direction="column">
            <ItemAvatar logo={data.logo} name={data.name} />
            <Heading size="3" className="truncate">
              {data.name}
            </Heading>
          </Flex>
          <Flex direction="row" className="flex-1" justify="end">
            <Grid columns="2"></Grid>
          </Flex>
        </Flex>
        <Flex direction="row" className="py-2" gap="4">
          <Tooltip content="Go to Homepage" delayDuration={100}>
            <Button
              variant="ghost"
              size="1"
              onClick={() => window.open(data.homepage, "_blank")}
            >
              <HomeIcon />
              Home
            </Button>
          </Tooltip>
          {data.github && (
            <Tooltip content="Go to Github page" delayDuration={100}>
              <Button
                variant="ghost"
                size="1"
                onClick={() => window.open(data.github.url, "_blank")}
              >
                <StarIcon />
                {formatStars(data.github.stars)}
              </Button>
            </Tooltip>
          )}
          {data.components && (
            <Tooltip content="All available components" delayDuration={100}>
              <Button variant="ghost" size="1">
                <Component1Icon />
                {data.components}
              </Button>
            </Tooltip>
          )}
        </Flex>
        {data.description && (
          <Tooltip content={data.description} className="max-w-xs">
            <Text color="gray" size="2" className="truncate-2-lines">
              {data.description}
            </Text>
          </Tooltip>
        )}
        {data.features && data.features.length > 0 && (
          <Flex>
            <Heading size="3">Features</Heading>
          </Flex>
        )}
      </Flex>
    </Card>
  );
}

// function FeatureItem({
//   icon: Icon,
//   title,
//   desc,
// }: {
//   icon: React.FC;
//   title: string;
//   desc?: string;
// }) {
//   const child = (
//     <Button variant="ghost" size="1">
//       <Icon />
//       {title}
//     </Button>
//   );
//   return desc ? (
//     <Tooltip content={desc} delayDuration={100}>
//       {child}
//     </Tooltip>
//   ) : (
//     child
//   );
// }
