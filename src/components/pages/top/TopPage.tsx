import { FaPencilAlt } from 'react-icons/fa';
import Link from 'next/link';
import {
  articleList,
  articleListItem,
  date,
  dateIcon,
  dateShowcase,
  description,
  detailLink,
  profShowcase,
  title,
} from '@/components/pages/top/TopPage.css';
import Profile from '@/components/organisms/profile/Profile';

const TopPage = () => {
  const dummy = [...Array(30)].map((_, i) => i);
  return (
    <div>
      <div className={articleList}>
        <aside className={profShowcase}>
          <Profile />
        </aside>
        {dummy.map((i) => (
          <article className={articleListItem} key={i}>
            <h2 className={title}>記事タイトル</h2>
            <p className={description}>
              記事の導入文とか記事の導入文とか記事の導入文とか記事の導入文とか
            </p>
            <Link href="/">
              <a className={detailLink}>全文を見る</a>
            </Link>
            <span className={dateShowcase}>
              <FaPencilAlt className={dateIcon} />
              <time className={date} dateTime="2022-05-01">
                2022年05月01日
              </time>
            </span>
          </article>
        ))}
      </div>
    </div>
  );
};

export default TopPage;
