import React, { ComponentPropsWithRef, ElementType, forwardRef } from "react";

const classNameText = {
  h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
  h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
  h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
  h4: "scroll-m-20 text-xl font-semibold tracking-tight",
  h5: "scroll-m-20 text-lg font-semibold tracking-tight",
  h6: "scroll-m-20 text-base font-semibold tracking-tight",
};

interface TitleProps extends Omit<ComponentPropsWithRef<"h1">, "as"> {
  as?: ElementType & keyof typeof classNameText;
}

const Title = forwardRef<HTMLHeadingElement, TitleProps>(function Title(
  { as: Component = "h1", className, children, ...props },
  ref,
) {
  const customClassName =
    classNameText[Component as keyof typeof classNameText];
  const finalClassName = customClassName
    ? `${className} ${customClassName}`
    : className;

  return (
    <Component ref={ref} className={finalClassName} {...props}>
      {children}
    </Component>
  );
});

const Text = forwardRef<
  HTMLParagraphElement,
  React.HTMLProps<HTMLParagraphElement>
>(function Paragraph(props, ref) {
  return (
    <p ref={ref} className="leading-7 [&:not(:first-child)]:mt-6" {...props}>
      {props.children}
    </p>
  );
});

const Blockquote = forwardRef<
  HTMLQuoteElement,
  React.HTMLProps<HTMLQuoteElement>
>(function Blockquote(props, ref) {
  return (
    <blockquote ref={ref} className="mt-6 border-l-2 pl-6 italic" {...props}>
      {props.children}
    </blockquote>
  );
});

interface ListProps extends React.HTMLProps<HTMLUListElement> {
  items: (string | React.ReactNode | number)[];
}

const List = forwardRef<HTMLUListElement, ListProps>(function List(
  { children, items, ...restProps },
  ref,
) {
  return (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2" ref={ref} {...restProps}>
      {items
        ? items.map((item, index) => <li key={index}>{item}</li>)
        : children}
    </ul>
  );
});

const InlineCode = forwardRef<
  HTMLQuoteElement,
  React.HTMLProps<HTMLQuoteElement>
>(function InlineCode(props, ref) {
  return (
    <code
      ref={ref}
      className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
      {...props}
    >
      {props.children}
    </code>
  );
});

const Typography = {
  Title,
  Text,
  Blockquote,
  List,
  InlineCode,
};

export default Typography;
