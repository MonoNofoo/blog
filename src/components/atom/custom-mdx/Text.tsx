import { DetailedHTMLProps, HTMLAttributes } from 'react';
import * as styles from '@/components/atom/custom-mdx/Text.css';

export const Text = ({
  children,
  ...props
}: DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>) => (
  <p className={styles.text} {...props}>
    {children}
  </p>
);
