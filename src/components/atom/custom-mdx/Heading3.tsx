import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { heading } from '@/components/atom/custom-mdx/Heading.css';

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
