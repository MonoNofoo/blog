import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { heading } from '@/components/atom/custom-mdx/Heading.css';

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
