import { SiteHeader } from "@/components/site-header";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { TailwindIndicator } from "@components/shared";
import { Metadata } from "next";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <div
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <div className="flex-1">{children}</div>
        </div>
        <TailwindIndicator />
      </div>
    </>
  );
}
