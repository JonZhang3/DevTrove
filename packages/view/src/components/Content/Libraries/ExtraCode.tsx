import { IconButton, HoverCard, Code } from "@radix-ui/themes";
import { CodeIcon } from "@radix-ui/react-icons";

export default function ExtraCode({ code }: { code: string }) {
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
