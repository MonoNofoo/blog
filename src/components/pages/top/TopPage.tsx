import { FaPencilAlt } from 'react-icons/fa';
import Link from 'next/link';
import * as styles from '@/components/pages/top/TopPage.css';
import Profile from '@/components/organisms/profile/Profile';
import { MetaData } from '@/domains/models/articles/MetaData';
import { formatLocalDateToJapanese } from '@/domains/values/shared/LocalDate';
import { OmitMetaDataDescription } from '@/domains/values/articles/MetaDataDescription';
import { ArticleDetailPagePath } from '@/const/pagePath';
import TagList from '@/components/organisms/tag-list/TagList';

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
        {articlesMetaData.map((metaData) => (
          <article className={styles.articleListItem} key={metaData.id}>
            <TagList tagIds={metaData.tags} />
            <h2 className={styles.title}>{metaData.title}</h2>
            <p className={styles.description}>
              {OmitMetaDataDescription(metaData.description)}
            </p>
            <Link href={ArticleDetailPagePath(metaData.id)}>
              <a className={styles.detailLink}>全文を見る</a>
            </Link>
            <span className={styles.dateShowcase}>
              <FaPencilAlt className={styles.dateIcon} />
              <time className={styles.date} dateTime={metaData.createdAt}>
                {formatLocalDateToJapanese(metaData.createdAt)}
              </time>
            </span>
          </article>
        ))}
      </div>
    </div>
  );
};

export default TopPage;
