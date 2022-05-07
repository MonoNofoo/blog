import { FaTag } from 'react-icons/fa';
import Link from 'next/link';
import {
  MetaDataTagEnum,
  MetaDataTagId,
} from '@/domains/values/articles/MetaDataTag';
import * as styles from '@/components/organisms/tag-list/TagList.css';
import { ArticleTagPagePath } from '@/const/pagePath';

type Props = {
  tagIds: MetaDataTagId[];
};

const TagList = ({ tagIds }: Props) => {
  return (
    <ul className={styles.tagList}>
      {tagIds.map((tagId) => (
        <li key={tagId} className={styles.tag}>
          <Link href={ArticleTagPagePath(MetaDataTagEnum[tagId])}>
            <a className={styles.link}>
              <FaTag className={styles.icon} />
              {MetaDataTagEnum[tagId].label}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TagList;
