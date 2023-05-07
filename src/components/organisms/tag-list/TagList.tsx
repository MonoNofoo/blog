import { FaTag } from 'react-icons/fa';
import Link from 'next/link';
import clsx from 'clsx';
import { FC } from 'react';
import {
  MetaDataTagEnum,
  MetaDataTagId,
} from '@/domains/values/articles/MetaDataTag';
import * as styles from '@/components/organisms/tag-list/TagList.css';
import { ArticleTagPagePath } from '@/const/pagePath';

type Props = {
  tagIds: MetaDataTagId[];
  className?: string;
};

/**
 * ブログに紐づくタグを表すコンポーネント
 * @param tagIds
 * @param className
 * @constructor
 */
const TagList: FC<Props> = ({ tagIds, className }) => {
  return (
    <ul className={clsx(styles.tagList, className)}>
      {tagIds.map((tagId) => (
        <li key={tagId} className={styles.tag}>
          <Link
            href={ArticleTagPagePath(MetaDataTagEnum[tagId])}
            className={styles.link}
          >
            <FaTag className={styles.icon} />
            {MetaDataTagEnum[tagId].label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

TagList.defaultProps = {
  className: undefined,
};

export default TagList;
