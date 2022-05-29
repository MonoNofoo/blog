import { ReactNode } from 'react';
import { MDXProvider } from '@mdx-js/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FaHistory, FaPencilAlt } from 'react-icons/fa';
import DefaultLayout from '@/components/layout/default-layout/DefaultLayout';
import * as styles from '@/components/layout/article-layout/ArticleLayout.css';
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
import Profile from '@/components/organisms/profile/Profile';
import { formatLocalDateToJapanese } from '@/domains/values/shared/LocalDate';
import TagList from '@/components/organisms/tag-list/TagList';

type Props = {
  children: ReactNode;
  metaData: Omit<MetaData, 'id'>;
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
  const router = useRouter();
  console.log(router.query);
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    author: {
      '@type': 'Person',
      name: 'モノのふー',
      url: 'https://twitter.com/mono_nofoo',
    },
    dateModified: metaData.updatedAt ?? metaData.createdAt,
    datePublished: metaData.createdAt,
    headline: metaData.title,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': router.asPath,
    },
  };

  return (
    <DefaultLayout>
      <Head>
        <title>{metaData.title}｜Mono Memo</title>
        <meta name="description" content={metaData.description} />
        <link rel="canonical" href={router.asPath} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
      </Head>
      <MDXProvider components={components}>
        <article className={styles.showcase}>
          <Heading1>{metaData.title}</Heading1>
          <div className={styles.dateBox}>
            <FaPencilAlt className={styles.icon} />
            <time dateTime={metaData.createdAt}>
              {formatLocalDateToJapanese(metaData.createdAt)}
            </time>
            {metaData.updatedAt && (
              <>
                <FaHistory className={styles.icon} />
                <time dateTime={metaData.updatedAt}>
                  {formatLocalDateToJapanese(metaData.updatedAt)}
                </time>
              </>
            )}
          </div>
          <TagList tagIds={metaData.tags} className={styles.tagBox} />
          {children}
        </article>
      </MDXProvider>
      <div className={styles.profile}>
        <Profile />
      </div>
    </DefaultLayout>
  );
};

export default ArticleLayout;
