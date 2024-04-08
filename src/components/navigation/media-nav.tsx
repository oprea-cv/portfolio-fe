"use client";

import { Icons, ModeToggle } from "@/components/shared";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { NavigationMenuItem } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import React from "react";

export const socialMedia = [
  {
    id: "github",
    href: siteConfig.links.github,
    icon: <Icons.github className="w-4 h-4" />,
  },
  {
    id: "twitter",
    href: siteConfig.links.twitter,
    icon: <Icons.twitter className="w-4 h-4" />,
  },
  {
    id: "linkedin",
    href: siteConfig.links.linkedin,
    icon: <Icons.linkedin className="w-4 h-4" />,
  },
  {
    id: "telegram",
    href: siteConfig.links.telegram,
    icon: <Icons.telegram className="w-4 h-4" />,
  },
];

export const MediaList: React.FC = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {socialMedia.map((item) => (
          <NavigationMenuItem className="flex" key={item.id}>
            <Link href={item.href} target="_blank" rel="noreferrer">
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "flex items-center space-x-2 p-3",
                )}
              >
                {item.icon}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>
          <ModeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MediaList;
