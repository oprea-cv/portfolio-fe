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
import React from "react";
import { Separator } from "../ui/separator";

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

interface MediaListProp {
  type?: "horizontal" | "vertical";
  separator?: boolean;
}

export const MediaList: React.FC<MediaListProp> = (props) => {
  const { type = "vertical", separator = false } = props;

  return (
    <NavigationMenu>
      <NavigationMenuList
        className={cn(
          "flex space-2",
          type === "horizontal" ? "flex-col test" : "",
        )}
      >
        {socialMedia.map((item) => (
          <NavigationMenuItem className="flex" key={item.id}>
            <NavigationMenuLink
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className={cn(
                navigationMenuTriggerStyle(),
                "flex items-center space-x-2 p-3",
              )}
            >
              {item.icon}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
        {separator ? (
          <NavigationMenuItem className="flex items-center justify-center flex-col text-sm text-gray-500 space-y-10 mb-5">
            <Separator orientation="vertical" className="w-[2px] h-10 m-4" />

            <div
              className={cn(
                "flex items-center justify-center text-sm text-gray-500 -rotate-90 transform",
              )}
            >
              Folow me
            </div>
            <Separator orientation="vertical" className="w-[2px] h-10 m-4" />
          </NavigationMenuItem>
        ) : null}
        <NavigationMenuItem>
          <ModeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MediaList;
