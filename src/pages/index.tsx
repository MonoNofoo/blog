import Head from 'next/head';
import { GetStaticProps } from 'next';
import type { NextPage } from 'next';
import DefaultLayout from '@/components/layout/default-layout/DefaultLayout';
import TopPage, { TopPageProps } from '@/components/pages/top/TopPage';
import { fetchSortedArticlesMetaData } from '@/domains/models/articles/MetaData';

type Props = TopPageProps;

const Index: NextPage<Props> = (props) => {
  return (
    <>
      <Head>
        <title>Mono Memo</title>
        <meta
          name="description"
          content="個人的な学習メモとかを書いたりしている個人ブログサイトです。"
        />
      </Head>
      <DefaultLayout siteNameElement="h1">
        <TopPage {...props} />
      </DefaultLayout>
    </>
  );
};

export default Index;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const articlesMetaData = await fetchSortedArticlesMetaData();

  return {
    props: { articlesMetaData },
  };
};
