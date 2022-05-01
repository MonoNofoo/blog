import {
  articleList,
  articleListItem,
  title,
} from '@/components/pages/top/TopPage.css';

const TopPage = () => {
  const dummy = [...Array(30)].map((_, i) => i);
  return (
    <div>
      <ul className={articleList}>
        {dummy.map((i) => (
          <li className={articleListItem} key={i}>
            <h2 className={title}>記事タイトル</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopPage;
