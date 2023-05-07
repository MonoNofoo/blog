import { DetailedHTMLProps, HTMLAttributes } from 'react';
import * as styles from '@/components/atom/custom-mdx/Quote.css';

export const Quote = ({
  children,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>) => (
  <blockquote className={styles.quote} {...props}>
    {children}
  </blockquote>
);
