import { SiteHeader } from "@/components/layout";
import { MediaList } from "@/components/navigation";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { useActions } from "@/store/hooks/useActions";
import { useAppSelector } from "@/store/hooks/useAppSelector";
import { TailwindIndicator } from "@components/shared";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
interface RootLayoutProps {
  children: React.ReactNode;
}

export const RootLayout = ({ children }: RootLayoutProps) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ container: scrollRef });
  const { setScrollYContainer } = useActions();
  const isScrolling = useAppSelector((state) => state.ui.isScrolling);
  const router = useRouter();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollYContainer(latest);
  });

  useEffect(() => {
    setScrollYContainer(scrollY.get());
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [router.pathname]);

  return (
    <div
      className={cn(
        "min-h-screen bg-background font-sans antialiased root-layout overflow-scroll",
        fontSans.variable,
      )}
      ref={scrollRef}
    >
      <div className="flex h-screen flex-col px-2">
        <SiteHeader />
        <section className="max-w-screen-2xl p-4 mx-auto w-full flex-1 relative">
          {children}
        </section>

        <motion.div
          initial={{
            y: "50%",
            opacity: 0,
            left: -100,
            scale: 0.5,
          }}
          animate={{
            opacity: isScrolling ? [0, 0, 0, 0, 0, 1] : 0,
            left: isScrolling ? 10 : -100,
            scale: isScrolling ? 1 : 0.5,
          }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-[50%] left-5 transform translate-y-1/2 mr-4"
        >
          <MediaList type="horizontal" separator />
        </motion.div>
      </div>
      <TailwindIndicator />
    </div>
  );
};

export default RootLayout;
