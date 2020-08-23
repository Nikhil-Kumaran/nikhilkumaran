import Head from "next/head";
import { siteTitle, name } from "../utils/constants";
import Link from "next/link";
import styles from "./layout.module.css";
import Profile from "../public/images/profile.svg";

export default function Layout({ children, post, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Frontend Engineer | ReactJS | Tech Writer/Speaker"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@iNikhilKumaran" />
        <meta name="twitter:creator" content="@iNikhilKumaran" />
      </Head>
      <header className={styles.header}>
        <div className={styles.headerWrap}>
          <div className={styles.logo}>
            <Link href="/">
              <a>
                <Profile className={styles.headerImage} />
              </a>
            </Link>
            <h1>{name}</h1>
          </div>
          <div className={styles.headerMenus}>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </div>
        </div>
      </header>

      <main className={styles.container}>{children}</main>

      {post && (
        <div className={styles.container}>
          <Link href="/blog">
            <a>← Back to blog</a>
          </Link>
        </div>
      )}
      {home && (
        <div className={styles.container}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
