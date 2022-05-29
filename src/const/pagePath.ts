import { MetaDataId } from '@/domains/values/articles/MetaDataId';
import { MetaDataTagEnumValue } from '@/domains/values/articles/MetaDataTag';

export const TopPagePath = '/';

export const ArticleDetailPagePath = (id: MetaDataId) =>
  `/articles/${id}` as const;

export const ArticleTagPagePath = (tag: MetaDataTagEnumValue) =>
  `/tags/${tag.urlValue}` as const;
