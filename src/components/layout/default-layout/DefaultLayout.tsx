import { ReactNode } from 'react';
import Link from 'next/link';
import {
  decorationBig,
  decorationMiddle,
  decorationSmall,
  footer,
  header,
  main,
  outer,
  siteName,
} from '@/components/layout/default-layout/DefaultLayout.css';
import { format } from 'date-fns';

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
      <footer className={footer}>
        <small>&copy; {format(new Date(), 'yyyy')} mono_nofoo</small>
      </footer>
    </div>
  );
};

DefaultLayout.defaultProps = {
  siteNameElement: 'a',
};

export default DefaultLayout;
