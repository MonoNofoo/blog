import { ReactNode } from 'react';
import { MDXProvider } from '@mdx-js/react';
import Head from 'next/head';
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
import { MetaData } from '@/domains/models/articles/MetaData';

type Props = {
  children: ReactNode;
  metaData: MetaData;
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

const ArticleLayout = ({ children, metaData }: Props) => {
  return (
    <DefaultLayout>
      <Head>
        <title>{metaData.title}｜Mono Memo</title>
        <meta name="description" content={metaData.description} />
      </Head>
      <MDXProvider components={components}>
        <article className={showcase}>
          <Heading1>{metaData.title}</Heading1>
          <time>{metaData.createdAt}</time>
          {children}
        </article>
      </MDXProvider>
    </DefaultLayout>
  );
};

export default ArticleLayout;
