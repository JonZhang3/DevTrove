import React from "react";
import clsx from "clsx";
import * as RadixDialog from "@radix-ui/react-dialog";
import { Theme } from "@radix-ui/themes";

export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?(open: boolean): void;
  trigger?: React.ReactNode;
  title?: string;
  description?: string;
  overlayClassName?: string;
}

const Dialog = React.forwardRef<HTMLDivElement, DialogProps>((props, ref) => {
  const {
    defaultOpen = false,
    open = false,
    onOpenChange,
    trigger,
    title,
    description,
    className,
    overlayClassName,
    children,
  } = props;

  return (
    <RadixDialog.Root
      defaultOpen={defaultOpen}
      open={open}
      onOpenChange={onOpenChange}
      modal={true}
    >
      {trigger && <RadixDialog.Trigger>{trigger}</RadixDialog.Trigger>}
      <RadixDialog.Portal>
        <Theme asChild>
          <RadixDialog.Overlay
            className={clsx("rt-DialogOverlay", overlayClassName)}
          >
            <RadixDialog.Content
              ref={ref}
              className={clsx("rt-DialogContent rt-r-size-3", className)}
            >
              {title && <RadixDialog.Title>{title}</RadixDialog.Title>}
              {description && (
                <RadixDialog.Description>{description}</RadixDialog.Description>
              )}
              {children}
            </RadixDialog.Content>
          </RadixDialog.Overlay>
        </Theme>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
});

Dialog.displayName = "Dialog";

export default Dialog;
