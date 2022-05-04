import { ReactNode } from 'react';
import { MDXProvider } from '@mdx-js/react';
import DefaultLayout from '@/components/layout/default-layout/DefaultLayout';
import { showcase } from '@/components/layout/article-layout/ArticleLayout.css';
import {
  BlockCode,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  InlineCode,
  Quote,
  Text,
} from '@/components/atom/custom-mdx/CustomMdx';

type Props = {
  children: ReactNode;
};

const components = {
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  p: Text,
  blockquote: Quote,
  pre: BlockCode,
  code: InlineCode,
};

const ArticleLayout = ({ children }: Props) => {
  return (
    <DefaultLayout>
      <MDXProvider components={components}>
        <article className={showcase}>{children}</article>
      </MDXProvider>
    </DefaultLayout>
  );
};

export default ArticleLayout;
