import { useState, useEffect } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import clsx from "clsx";
import { NavLink, useLocation } from "react-router-dom";

const items = [
  {
    value: "libraries",
    title: "Libraries",
    href: "/",
  },
  {
    value: "tech-stack",
    title: "Tech Stack",
    href: "/tech-stack",
  },
];

export interface MenusProps {
  value?: string;
  onValueChange?(value: string): void;
}

export default function Menus({ value, onValueChange }: MenusProps) {
  const location = useLocation();
  const [active, setActive] = useState(value || items[0].value);

  const handleItemClick = (value: string) => {
    if (value === active) {
      return;
    }
    setActive(value);
    onValueChange?.(value);
  };

  useEffect(() => {
    const item = items.find((item) => item.href === location.pathname);
    if (item) {
      setActive(item.value);
    }
  }, [location]);

  return (
    <NavigationMenu.Root
      orientation="vertical"
      className="menu-root flex justify-center h-full"
      value={active}
    >
      <NavigationMenu.List className="menu-list h-full flex flex-row">
        {items.map((item) => (
          <NavigationMenu.Item
            className="h-full"
            key={item.value}
            onClick={() => handleItemClick(item.value)}
          >
            <NavigationMenuLink href={item.href} active={active === item.value}>
              {item.title}
            </NavigationMenuLink>
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}

interface NavigationMenuLinkProps {
  route?: boolean;
  href?: string;
  title?: string;
  children?: React.ReactNode;
  active?: boolean;
}

function NavigationMenuLink({
  route = true,
  href,
  title,
  children,
  active = false,
}: NavigationMenuLinkProps) {
  const child = title ? title : children;
  const Root = route ? NavLink : NavigationMenu.Link;

  return (
    <Root
      className={clsx(
        "menu-list-item h-full flex items-center cursor-pointer",
        "relative px-4 hover:bg-gray-3",
        !active && "text-gray-10",
        {
          "text-accent-12": active,
          "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent-12":
            active,
        },
        "after:transition-all after:duration-300 after:ease-in-out"
      )}
      to={href!}
    >
      {child}
    </Root>
  );
}
