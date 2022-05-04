import { ReactNode } from 'react';
import Link from 'next/link';
import {
  decorationBig,
  decorationMiddle,
  decorationSmall,
  header,
  main,
  outer,
  siteName,
} from '@/components/layout/default-layout/DefaultLayout.css';

type Props = {
  children: ReactNode;
  siteNameElement?: 'h1' | 'a';
};

const DefaultLayout = ({ children, siteNameElement }: Props) => {
  return (
    <div className={outer}>
      <div className={decorationBig} />
      <div className={decorationSmall} />
      <div className={decorationMiddle} />
      <header className={header}>
        {siteNameElement === 'a' ? (
          <Link href="/">
            <a className={siteName}>Mono Memo</a>
          </Link>
        ) : (
          <h1 className={siteName}>Mono Memo</h1>
        )}
      </header>
      <main className={main}>{children}</main>
    </div>
  );
};

DefaultLayout.defaultProps = {
  siteNameElement: 'a',
};

export default DefaultLayout;
