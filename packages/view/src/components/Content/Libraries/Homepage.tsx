import { Tooltip } from "@radix-ui/themes";
import { HomeIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import ExtraItem from "./ExtraItem";

export interface HomepageProp {
  homepage: string;
}

export default function Homepage({ homepage }: HomepageProp) {
  let Cmp = HomeIcon;
  let tooltip = "Go to Home";
  if (homepage.includes("github.com")) {
    Cmp = GitHubLogoIcon;
    tooltip = "Go to Github";
  }

  return (
    <Tooltip content={tooltip} delayDuration={100}>
      <ExtraItem href={homepage}>
        <Cmp />
      </ExtraItem>
    </Tooltip>
  );
}
