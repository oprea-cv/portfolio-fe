import RootLayout from "@/components/layout/root-layout";

const PreviewPage = () => {
  return (
    <RootLayout>
      <div
        className={`flex min-h-screen flex-col items-center justify-between p-1`}
      >
        <h1 className={`text-4xl font-bold`}>Hello, World!</h1>
      </div>
    </RootLayout>
  );
};

export default PreviewPage;
