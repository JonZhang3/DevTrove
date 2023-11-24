import React from "react";
import { IconButton } from "@radix-ui/themes";
import clsx from "clsx";

export interface ExtraItemProps
  extends React.ComponentPropsWithoutRef<"button"> {
  href?: string;
}

const ExtraItem = React.forwardRef<HTMLButtonElement, ExtraItemProps>(
  (props, ref) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { href, children, className, onClick, ...rest } = props;

    const handleClick = () => {
      console.log(1);
      href && window.open(href, "_blank");
    };

    return (
      <IconButton
        ref={ref}
        variant="ghost"
        className={clsx("text-[18px]", className)}
        onClick={handleClick}
        {...(rest as object)}
      >
        {children}
      </IconButton>
    );
  }
);

ExtraItem.displayName = "ExtraItem";

export default ExtraItem;
