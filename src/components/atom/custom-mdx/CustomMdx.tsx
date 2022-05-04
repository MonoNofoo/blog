import { DetailedHTMLProps, HTMLAttributes } from 'react';
import {
  blockCode,
  heading,
  inlineCode,
  quote,
  text,
} from '@/components/atom/custom-mdx/CustomMdx.css';

export const Heading1 = ({
  children,
  ...props
}: DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>) => (
  <h1 className={heading} {...props}>
    {children}
  </h1>
);

export const Heading2 = ({
  children,
  ...props
}: DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>) => (
  <h2 className={heading} {...props}>
    {children}
  </h2>
);

export const Heading3 = ({
  children,
  ...props
}: DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>) => (
  <h3 className={heading} {...props}>
    {children}
  </h3>
);

export const Heading4 = ({
  children,
  ...props
}: DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>) => (
  <h4 className={heading} {...props}>
    {children}
  </h4>
);

export const Text = ({
  children,
  ...props
}: DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>) => (
  <p className={text} {...props}>
    {children}
  </p>
);

export const Quote = ({
  children,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>) => (
  <blockquote className={quote} {...props}>
    {children}
  </blockquote>
);

export const BlockCode = ({
  children,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>) => (
  <pre className={blockCode} {...props}>
    {children}
  </pre>
);

export const InlineCode = (
  props: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
) => <code className={inlineCode} {...props} />;
