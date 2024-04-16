import { MainNav, MobileNav } from "@/components";
import { MediaList } from "@/components/navigation";
import { cn } from "@/lib/utils";
import { useAppSelector } from "@/store/hooks/useAppSelector";
import { motion } from "framer-motion";

const SiteHeader = () => {
  const isScrolling = useAppSelector((state) => state.ui.isScrolling);

  const variants = {
    initial: {
      maxWidth: "100%",
      top: "auto",
      left: 0,
      right: 0,
      opacity: 0,
    },
    animate: {
      opacity: 1,
      maxWidth: isScrolling ? "800px" : "100%",
      top: isScrolling ? "1.5rem" : "auto",
      margin: isScrolling ? "0" : "auto",
      borderRadius: isScrolling ? "0.5rem" : 0,
      boxShadow: isScrolling
        ? "0px 1px 0.25rem 0.125rem rgba(75, 85, 99,0.2)"
        : "",
      border: isScrolling ? "1px solid rgba(75, 85, 99,0.2)" : "",
      borderBottom: !isScrolling ? "1px solid rgba(75, 85, 99, 0.2)" : "",
    },
    transition: {
      duration: 0.3,
    },
  };

  return (
    <motion.header
      className={cn(
        "absolute top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-between",
        "transition-all duration-300 ease-in-out",
        "flex justify-center items-center",
      )}
      {...variants}
    >
      <div className="container flex justify-center items-center h-16 max-w-screen-2xl">
        <MainNav />
        <MobileNav />
        <motion.div
          className="flex flex-1 items-center w-full justify-end space-x-2 sm:justify-end md:justify-end"
          initial={{
            opacity: 0,
            display: "flex",
          }}
          animate={{
            opacity: isScrolling ? 0 : 1,
            transitionEnd: {
              display: isScrolling ? "none" : "flex",
            },
          }}
          transition={{ duration: 0.3 }}
        >
          <MediaList />
        </motion.div>
      </div>
    </motion.header>
  );
};

export default SiteHeader;
