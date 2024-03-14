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
import { techStackFeatures } from "data";
// import { DynamicIcon } from "icons";
import clsx from "clsx";
import ItemAvatar from "@/components/ItemAvatar";
import { HomeIcon, StarIcon, Component1Icon } from "@radix-ui/react-icons";
import { formatStars } from "@/utils/utils";
import { DynamicIcon } from "icons";

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
    <Card className="w-full min-w-[300px] relative" variant="classic">
      <Flex direction="column" className="px-2">
        <Flex direction="row" className="flex-1">
          <Flex direction="column">
            <ItemAvatar logo={data.logo} name={data.name} />
            <Heading size="3" className="truncate">
              {data.name}
            </Heading>
          </Flex>
          {data.features && (
            <Flex direction="row" className="flex-1" justify="end">
              <Grid columns="2" gapX="1">
                {Object.keys(data.features).map((feature, index) => (
                  <FeatureItem
                    featureKey={feature as keyof typeof techStackFeatures}
                    value={data.features[feature]}
                    key={index}
                  />
                ))}
              </Grid>
            </Flex>
          )}
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
      {data.skill && (
        <Tooltip
          content={`${data.skill.percent}%${
            data.skill.desc ? "|" + data.skill.desc : ""
          }`}
        >
          <div className="h-[8px] w-full absolute bottom-0 left-0 bg-gray-3 cursor-pointer">
            <div
              className="h-full bg-accent-12"
              style={{ width: `${data.skill.percent}%` }}
            ></div>
          </div>
        </Tooltip>
      )}
    </Card>
  );
}

function FeatureItem({
  featureKey,
  value,
}: {
  featureKey: keyof typeof techStackFeatures;
  value: boolean | string;
}) {
  const { title, icon, desc } = techStackFeatures[featureKey];
  let text: string = title;
  if (typeof value === "string") {
    text = value;
  }
  const child = (
    <Flex
      gap="1"
      align="center"
      className="text-1 cursor-pointer hover:bg-gray-3 p-[2px] rounded-[4px] h-6 overflow-hidden"
    >
      <DynamicIcon name={icon ? icon : "FeatherIcon"} />
      {text}
    </Flex>
  );
  return desc ? (
    <Tooltip content={desc} delayDuration={100}>
      {child}
    </Tooltip>
  ) : (
    child
  );
}
