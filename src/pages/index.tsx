import Head from 'next/head';
import type { NextPage } from 'next';
import DefaultLayout from '@/components/layout/DefaultLayout';
import TopPage from '@/components/pages/top/TopPage';

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>TOP</title>
      </Head>
      <DefaultLayout siteNameElement="h1">
        <TopPage />
      </DefaultLayout>
    </>
  );
};

export default Index;
