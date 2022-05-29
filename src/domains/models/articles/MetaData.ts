import * as fs from 'fs';
import path from 'path';
import { MetaDataId } from '@/domains/values/articles/MetaDataId';
import { MetaDataTitle } from '@/domains/values/articles/MetaDataTitle';
import {
  MetaDataStatus,
  PUBLISH,
} from '@/domains/values/articles/MetaDataStatus';
import { MetaDataTagId } from '@/domains/values/articles/MetaDataTag';
import { LocalDate } from '@/domains/values/shared/LocalDate';
import { MetaDataDescription } from '@/domains/values/articles/MetaDataDescription';

/**
 * 記事のメタデータ
 */
export type MetaData = {
  id: MetaDataId;
  title: MetaDataTitle;
  status: MetaDataStatus;
  tags: MetaDataTagId[];
  description: MetaDataDescription;
  createdAt: LocalDate;
  updatedAt?: LocalDate;
};

const articlesDirectory = path.join(process.cwd(), 'src', 'pages', 'articles');

/**
 * 公開状態の全ての mdx のメタデータ取得
 */
export const fetchArticlesMetaData = async (): Promise<Awaited<MetaData>[]> => {
  const fileNames = fs.readdirSync(articlesDirectory);

  const metaDataList = await Promise.all(
    fileNames.map(async (fileName) => {
      const { meta }: { meta: Omit<MetaData, 'id'> } = await import(
        `@/pages/articles/${fileName}`
      );

      return { ...meta, ...{ id: fileName.replace(/\.mdx$/, '') } };
    }),
  );

  return metaDataList.filter((metaData) => metaData.status === PUBLISH);
};

/**
 * 公開状態の記事のメタデータを投稿日の新しい順に取得
 */
export const fetchSortedArticlesMetaData = async () => {
  const metaData = await fetchArticlesMetaData();
  return metaData.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
};

export const fetchArticlesMetaDataByMetaDataTagId = async (
  tagId: MetaDataTagId,
) => {
  const metaData = await fetchSortedArticlesMetaData();

  return metaData.filter((v) => v.tags.includes(tagId));
};
