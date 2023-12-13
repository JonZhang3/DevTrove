import { Flex, DropdownMenu, IconButton } from "@radix-ui/themes";
import { Share1Icon, Link2Icon } from "@radix-ui/react-icons";
import type { LibraryItemType } from "data";
import { XIcon } from "@/icons";
import { shareToX, copyToClipboard } from "@/utils/utils";

export interface ExtraShareProps {
  item: LibraryItemType;
}

export default function ExtraShare({ item }: ExtraShareProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <IconButton variant="ghost" className="text-[18px]">
          <Share1Icon />
        </IconButton>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content side="right">
        <DropdownMenu.Item
          onClick={() => shareToX(item.name, item.description, item.homepage!)}
        >
          <Flex direction="row" gap="3" align="center">
            <XIcon size={14} />
            <span>Share To 𝕏</span>
          </Flex>
        </DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item
          onClick={() =>
            copyToClipboard(
              `${item.name}\n${item.description}\n${item.homepage}`
            )
          }
        >
          <Flex direction="row" gap="3" align="center">
            <Link2Icon width={14} height={14} />
            <span>Copy Link</span>
          </Flex>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
