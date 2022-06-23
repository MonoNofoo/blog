import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArticleListItem from '@/components/organisms/article-list-item/ArticleListItem';
import { MetaData } from '@/domains/models/articles/MetaData';
import { PUBLISH } from '@/domains/values/articles/MetaDataStatus';
import { NEXT_JS, TYPE_SCRIPT } from '@/domains/values/articles/MetaDataTag';

export default {
  title: 'organisms/ArticleListItem',
  component: ArticleListItem,
} as ComponentMeta<typeof ArticleListItem>;

const dummyArticleMetaData: MetaData = {
  id: 'file-name',
  title: 'タイトルテキスト',
  status: PUBLISH,
  tags: [NEXT_JS, TYPE_SCRIPT],
  description: '記事のディスクリプションテキスト',
  createdAt: '2022-01-01',
};

const Template: ComponentStory<typeof ArticleListItem> = (args) => (
  <ArticleListItem {...args} />
);

export const Default = Template.bind({});
Default.args = { article: dummyArticleMetaData };
