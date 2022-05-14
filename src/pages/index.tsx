import Head from 'next/head';
import { GetStaticProps } from 'next';
import type { NextPage } from 'next';
import DefaultLayout from '@/components/layout/default-layout/DefaultLayout';
import TopPage, { TopPageProps } from '@/components/pages/top/TopPage';
import { getSortedArticlesMetaData } from '@/domains/models/articles/MetaData';

type Props = TopPageProps;

const Index: NextPage<Props> = (props) => {
  return (
    <>
      <Head>
        <title>Mono Memo</title>
      </Head>
      <DefaultLayout siteNameElement="h1">
        <TopPage {...props} />
      </DefaultLayout>
    </>
  );
};

export default Index;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const articlesMetaData = await getSortedArticlesMetaData();

  return {
    props: { articlesMetaData },
  };
};
