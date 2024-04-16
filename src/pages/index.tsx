import { Typography } from "@/components/ui";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { useAppSelector } from "@/store/hooks/useAppSelector";
import { motion } from "framer-motion";

import { ParallaxText } from "@/components/animations";
import { AppSection, RootLayout } from "@/components/layout";
import useCursor from "@/hooks/useCursor";
import { useTheme } from "next-themes";
import { useRef } from "react";
import bannerWhite from "/public/assets/banner-white.jpg";
import banner from "/public/assets/banner.jpg";

const PreviewPage = () => {
  const isScrolling = useAppSelector((state) => state.ui.isScrolling);

  const { resolvedTheme } = useTheme();
  const elementRef = useRef<HTMLDivElement>(null);
  const { handleMouseOver } = useCursor();

  return (
    <RootLayout>
      <AppSection>
        <motion.div
          className={cn(
            `p-1 relative flex align-center justify-center h-[80vh] mt-20`,
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="absolute inset-y-2/4 z-10"
            initial={{
              opacity: 0,
              x: -100,
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            animate={{
              opacity: 1,
              x: 0,
              left: isScrolling ? "5%" : "50%",
              transform: isScrolling
                ? "translate(0, 0)"
                : "translate(-50%, -50%)",
            }}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
          >
            <Typography.Title as="h1" className="font-bold font-virgil">
              Hello World!
            </Typography.Title>
          </motion.div>
          <motion.div
            className="relative overflow-hidden"
            initial={{
              opacity: 0,
              scale: 0.7,
              width: "100%",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              width: isScrolling ? "50%" : "100%",
              marginLeft: isScrolling ? "50%" : "0",
            }}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
          >
            <Image
              src={resolvedTheme === "dark" ? banner : bannerWhite}
              alt="Hello World"
              className={cn("w-full h-full object-cover rounded-lg opacity-40")}
            />
          </motion.div>
        </motion.div>
      </AppSection>

      <motion.div
        className="my-20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 2 }}
      >
        <ParallaxText baseVelocity={-2}>
          React.js Next.js TypeScript Node.js Nest.js
        </ParallaxText>
        <ParallaxText baseVelocity={2}>
          MaterialUI Ant Design ChakraUI TailwindCSS MongoBD
        </ParallaxText>
      </motion.div>

      <AppSection>
        <div
          className="min-h-screen"
          ref={elementRef}
          onMouseEnter={() => handleMouseOver(elementRef.current)}
          onMouseLeave={() => handleMouseOver(null)}
        >
          sfsdfsd
        </div>
      </AppSection>
    </RootLayout>
  );
};

export default PreviewPage;
