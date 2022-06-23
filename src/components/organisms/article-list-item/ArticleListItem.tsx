import Link from 'next/link';
import { FaPencilAlt } from 'react-icons/fa';
import { MetaData } from '@/domains/models/articles/MetaData';
import * as styles from '@/components/organisms/article-list-item/ArticleListItem.css';
import TagList from '@/components/organisms/tag-list/TagList';
import { OmitMetaDataDescription } from '@/domains/values/articles/MetaDataDescription';
import { ArticleDetailPagePath } from '@/const/pagePath';
import { formatLocalDateToJapanese } from '@/domains/values/shared/LocalDate';

type Props = {
  /**
   * 記事のメタデータ
   */
  article: MetaData;
};

/**
 * 記事一覧などで使用するコンポーネント。
 * 記事のタイトルの概要、記事詳細へのリンクが表示される。
 * @param article
 * @constructor
 */
const ArticleListItem = ({ article }: Props) => {
  return (
    <article className={styles.articleListItem} key={article.id}>
      <TagList tagIds={article.tags} />
      <h2 className={styles.title}>{article.title}</h2>
      <p className={styles.description}>
        {OmitMetaDataDescription(article.description)}
      </p>
      <Link href={ArticleDetailPagePath(article.id)}>
        <a className={styles.detailLink}>全文を見る</a>
      </Link>
      <span className={styles.dateShowcase}>
        <FaPencilAlt className={styles.dateIcon} />
        <time className={styles.date} dateTime={article.createdAt}>
          {formatLocalDateToJapanese(article.createdAt)}
        </time>
      </span>
    </article>
  );
};

export default ArticleListItem;
