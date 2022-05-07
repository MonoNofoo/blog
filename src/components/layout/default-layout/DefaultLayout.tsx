import { format } from 'date-fns';
import Link from 'next/link';
import { ReactNode } from 'react';
import * as styles from '@/components/layout/default-layout/DefaultLayout.css';
import { TopPagePath } from '@/const/pagePath';

type Props = {
  children: ReactNode;
  siteNameElement?: 'h1' | 'a';
};

const DefaultLayout = ({ children, siteNameElement }: Props) => {
  return (
    <div className={styles.outer}>
      <div className={styles.decorationBig} />
      <div className={styles.decorationSmall} />
      <div className={styles.decorationMiddle} />
      <header className={styles.header}>
        {siteNameElement === 'a' ? (
          <Link href={TopPagePath}>
            <a className={styles.siteName}>Mono Memo</a>
          </Link>
        ) : (
          <h1 className={styles.siteName}>Mono Memo</h1>
        )}
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <small>&copy; {format(new Date(), 'yyyy')} mono_nofoo</small>
      </footer>
    </div>
  );
};

DefaultLayout.defaultProps = {
  siteNameElement: 'a',
};

export default DefaultLayout;
