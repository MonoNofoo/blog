import { MetaDataTagEnumValue } from '@/domains/values/articles/MetaDataTag';
import { MetaData } from '@/domains/models/articles/MetaData';
import * as styles from '@/components/pages/tags/TagArticlesPage.css';
import ArticleListItem from '@/components/organisms/article-list-item/ArticleListItem';

export type TagArticlesPageProps = {
  metaDataTag: MetaDataTagEnumValue;
  articles: MetaData[];
};

const TagArticlesPage = ({ metaDataTag, articles }: TagArticlesPageProps) => {
  return (
    <>
      <h1 className={styles.pageTitle}>{metaDataTag.label} の記事一覧</h1>
      <div className={styles.articleList}>
        {articles.map((article) => (
          <ArticleListItem article={article} key={article.id} />
        ))}
      </div>
    </>
  );
};

export default TagArticlesPage;
