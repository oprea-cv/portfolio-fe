import React, { ElementType, HTMLAttributes, ReactNode } from "react";

interface BoxProps {
  as?: ElementType;
  children?: ReactNode;
}

const Box: React.FC<BoxProps & HTMLAttributes<HTMLElement>> = ({
  as: Element = "div",
  children,
  ...rest
}) => {
  return <Element {...rest}>{children}</Element>;
};

export { Box };
