import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { heading } from '@/components/atom/custom-mdx/Heading.css';

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
