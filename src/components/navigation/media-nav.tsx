"use client";

import { Icons, ModeToggle } from "@/components/shared";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  Separator,
  navigationMenuTriggerStyle,
} from "@/components/ui";
import { siteConfig } from "@/config/site";
import { useMediaQuery } from "@/hooks";
import { cn } from "@/lib/utils";
import { breakpoints } from "@/utils/constants";
import { NavigationMenuItem } from "@radix-ui/react-navigation-menu";
import { motion } from "framer-motion";
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

interface MediaListProp {
  type?: "horizontal" | "vertical";
  separator?: boolean;
}

export const MediaList: React.FC<MediaListProp> = (props) => {
  const { type = "vertical", separator = false } = props;

  const smHeight = useMediaQuery({ minHeight: breakpoints.sm });

  return (
    <NavigationMenu>
      <NavigationMenuList
        className={cn(
          "flex",
          type === "horizontal" ? "flex-col space-x-2 li-m-first" : "",
        )}
      >
        {socialMedia.map((item, index) => (
          <NavigationMenuItem className="flex" key={item.id}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, delay: index * 0.1, type: "tween" }}
            >
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
            </motion.div>
          </NavigationMenuItem>
        ))}
        {separator && smHeight ? (
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
