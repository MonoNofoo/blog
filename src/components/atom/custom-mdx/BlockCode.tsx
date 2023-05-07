import { DetailedHTMLProps, HTMLAttributes } from 'react';
import * as styles from '@/components/atom/custom-mdx/BlockCode.css';

export const BlockCode = ({
  children,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>) => (
  <pre className={styles.blockCode} {...props}>
    {children}
  </pre>
);
