"use client";

import { Icons } from "@/components/shared";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme } = useTheme();

  const dropMenuItems = [
    {
      title: "Light",
      icon: <SunIcon className="h-4 w-4 mr-2" />,
      onClick: () => setTheme("light"),
    },
    {
      title: "Dark",
      icon: <MoonIcon className="h-4 w-4 mr-2" />,
      onClick: () => setTheme("dark"),
    },
    {
      title: "System",
      icon: <Icons.brilliance className="h-4 w-4 mr-2" />,
      onClick: () => setTheme("system"),
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Button variant="outline" size="icon">
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </motion.div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {dropMenuItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <DropdownMenuItem key={index} onClick={item.onClick}>
              {item.icon}
              {item.title}
            </DropdownMenuItem>
          </motion.div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
