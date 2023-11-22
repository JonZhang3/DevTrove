import { Flex, Badge } from "@radix-ui/themes";
import { tags, useData } from "@/store";

export default function Tags() {
  const selectedTags = useData((state) => state.selectedTags);
  const selectTag = useData((state) => state.selectTag);

  return (
    <Flex className="py-4" justify="center">
      <Flex
        className="w-[40%]"
        wrap="wrap"
        gap="2"
        align="center"
        justify="start"
      >
        {tags.map((t, index) => (
          <Badge
            key={index}
            variant={selectedTags.includes(t[0]) ? "solid" : "soft"}
            color="gray"
            highContrast
            className="cursor-pointer"
            onClick={() => selectTag(t[0])}
          >
            {`${t[0]} (${t[1]})`}
          </Badge>
        ))}
      </Flex>
    </Flex>
  );
}
