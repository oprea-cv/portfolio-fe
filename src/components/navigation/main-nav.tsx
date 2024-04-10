"use client";

import { Icons } from "@/components/shared";
import { navigationMenuTriggerStyle } from "@/components/ui";
import { siteConfig } from "@/config/site";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@components/ui";
import { motion } from "framer-motion";
import Link from "next/link";

const itemsMenu = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Profile",
    href: "/profile",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Resume",
    href: "/resume",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export function MainNav() {
  return (
    <motion.header
      className="sm:justify mr-4 hidden md:flex"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <motion.div
          className="flex items-center space-x-2"
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
        >
          <Icons.logo className="h-6 w-6" />
          <span className="hidden font-bold sm:inline-block">
            {siteConfig.name}
          </span>
        </motion.div>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          {itemsMenu.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: -50,
              }}
              animate={{
                opacity: [0, 1],
                x: 0,
              }}
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <NavigationMenuItem>
                <Link href={item.href} className={navigationMenuTriggerStyle()}>
                  {item.title}
                </Link>
              </NavigationMenuItem>
            </motion.div>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </motion.header>
  );
}
