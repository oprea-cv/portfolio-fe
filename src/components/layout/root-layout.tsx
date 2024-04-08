import { SiteHeader } from "@/components/site-header";
import { ScrollArea } from "@/components/ui";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { TailwindIndicator } from "@components/shared";
import React from "react";
import { useActions } from "@/store/hooks/useActions";
import { useAppSelector } from "@/store/hooks/useAppSelector";
import { useMotionValueEvent, useScroll } from "framer-motion";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {

  const scrollRef = React.useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ container: scrollRef });
  const { setScrollYContainer } = useActions();

  const scrollYContainer = useAppSelector((state) => state.ui.scrollYContainer);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollYContainer(latest);
  });

  console.log(scrollYContainer, scrollRef);


  return (
    <div
      className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable,
      )}
    >
      <div className="relative flex h-screen flex-col">
        <SiteHeader />
        <ScrollArea
          className="max-w-screen-2xl p-4 mx-auto w-full flex-1"
          ref={scrollRef}
        >
          {children}
        </ScrollArea>
      </div>
      <TailwindIndicator />
    </div>
  );
}
