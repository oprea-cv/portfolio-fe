import React from "react";

interface AppSectionProps {
  children: React.ReactNode;
}

const AppSection: React.FC<AppSectionProps> = (props) => {
  return (
    <section className="max-w-screen-2xl p-4 mx-auto w-full flex-1 relative">
      {props.children}
    </section>
  );
};

export default AppSection;
