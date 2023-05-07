import { DetailedHTMLProps, HTMLAttributes } from 'react';
import * as styles from '@/components/atom/custom-mdx/inlineCode.css';

export const InlineCode = (
  props: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
) => <code className={styles.inlineCode} {...props} />;
