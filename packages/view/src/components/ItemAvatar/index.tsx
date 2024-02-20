import { Avatar } from "@radix-ui/themes";
import { DynamicIcon } from "icons";

export default function ItemAvatar({
  logo,
  name,
}: {
  logo?: string;
  name: string;
}) {
  return (
    <Avatar
      src={logo && logo.startsWith("http") ? logo : undefined}
      fallback={
        <DynamicIcon name={logo} size="100%" fallback={() => name.charAt(0)} />
      }
      color="gray"
      highContrast
    />
  );
}
