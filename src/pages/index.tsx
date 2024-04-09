import RootLayout from "@/components/layout/root-layout";
import { Typography } from "@/components/ui";

const PreviewPage = () => {
  return (
    <RootLayout>
      <div
        className={`flex min-h-screen flex-col items-center justify-between p-1`}
      >
        <Typography.Title as="h1" className="font-thin">
          Hello, World!
        </Typography.Title>
      </div>
    </RootLayout>
  );
};

export default PreviewPage;
