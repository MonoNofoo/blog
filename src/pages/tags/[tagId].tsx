import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import DefaultLayout from '@/components/layout/default-layout/DefaultLayout';
import {
  fetchArticlesMetaDataByMetaDataTagId,
  fetchSortedArticlesMetaData,
} from '@/domains/models/articles/MetaData';
import {
  fetchMetaDataTagByUrlValue,
  MetaDataTagEnum,
  MetaDataTagId,
} from '@/domains/values/articles/MetaDataTag';
import TagArticlesPage, {
  TagArticlesPageProps,
} from '@/components/pages/tags/TagArticlesPage';
import { ArticleTagPagePath } from '@/const/pagePath';

type Props = TagArticlesPageProps;
type Params = { tagId: MetaDataTagId };

const Index: NextPage<Props> = (props) => {
  const { metaDataTag } = props;

  return (
    <>
      <Head>
        <title>{`${metaDataTag.label}の記事一覧`}</title>
        <meta
          name="description"
          content={`${metaDataTag.label}のタグがついている記事一覧です。`}
        />
        <link rel="canonical" href={ArticleTagPagePath(metaDataTag)} />
      </Head>
      <DefaultLayout>
        <TagArticlesPage {...props} />
      </DefaultLayout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // 使用されているタグを取得
  const articleMetaDataList = await fetchSortedArticlesMetaData();
  const articleTagIds = Array.from(
    new Set(articleMetaDataList.flatMap((metaData) => metaData.tags)),
  );

  return {
    paths: articleTagIds.map((tagId) => ({
      params: { tagId: MetaDataTagEnum[tagId].urlValue },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const tagId = params?.tagId ?? '';
  const metaDataTag = fetchMetaDataTagByUrlValue(tagId);
  const articles = await fetchArticlesMetaDataByMetaDataTagId(metaDataTag.id);

  return { props: { metaDataTag, articles } };
};

export default Index;
