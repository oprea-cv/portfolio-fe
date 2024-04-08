import { SiteHeader } from "@/components/layout";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { useActions } from "@/store/hooks/useActions";
import { TailwindIndicator } from "@components/shared";
import { useMotionValueEvent, useScroll } from "framer-motion";
import React from "react";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ container: scrollRef });
  const { setScrollYContainer } = useActions();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollYContainer(latest);
  });

  return (
    <div
      className={cn(
        "min-h-screen bg-background font-sans antialiased root-layout overflow-scroll",
        fontSans.variable,
      )}
      ref={scrollRef}
    >
      <div className="relative flex h-screen flex-col px-2">
        <SiteHeader />
        <section className="max-w-screen-2xl p-4 mx-auto w-full flex-1">
          {children}
        </section>
      </div>
      <TailwindIndicator />
    </div>
  );
}
