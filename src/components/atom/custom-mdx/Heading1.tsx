import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { heading } from '@/components/atom/custom-mdx/Heading.css';

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
