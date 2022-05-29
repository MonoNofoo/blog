import * as styles from '@/components/pages/top/TopPage.css';
import Profile from '@/components/organisms/profile/Profile';
import { MetaData } from '@/domains/models/articles/MetaData';
import ArticleListItem from '@/components/organisms/article-list-item/ArticleListItem';

export type TopPageProps = {
  articlesMetaData: MetaData[];
};

const TopPage = ({ articlesMetaData }: TopPageProps) => {
  return (
    <div>
      <div className={styles.articleList}>
        <aside className={styles.profShowcase}>
          <Profile />
        </aside>
        {articlesMetaData.map((article) => (
          <ArticleListItem article={article} key={article.id} />
        ))}
      </div>
    </div>
  );
};

export default TopPage;
