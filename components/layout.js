import Head from "next/head";
import { useState, useEffect } from "react";
import { siteTitle, name, themes } from "../utils/constants";
import Link from "next/link";
import styles from "./Layout.module.css";
import Profile from "../public/images/profile.svg";
import prismLight from "../styles/prismLight";
import prismDark from "../styles/prismDark";

const ThemeContext = React.createContext(themes.light);

export default function Layout({ children, post, home }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const preferedTheme = localStorage.getItem("theme");
    if (preferedTheme) {
      setTheme(preferedTheme);
    }
  }, []);

  useEffect(() => {
    const html = document.getElementsByTagName("html")[0];
    html.dataset.theme = theme;
  }, [theme]);

  const handleThemeChange = () => {
    if (theme === themes.light) {
      setTheme(themes.dark);
      localStorage.setItem("theme", themes.dark);
    } else {
      setTheme(themes.light);
      localStorage.setItem("theme", themes.light);
    }
  };

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
      <ThemeContext.Provider value={theme}>
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
              <button
                className={styles.toggleTheme}
                onClick={handleThemeChange}
              >
                <div className={styles[theme]}></div>
              </button>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </div>
          </div>
        </header>

        <main className={styles.container}>{children}</main>
        {theme === themes.light ? (
          <style jsx global>
            {prismLight}
          </style>
        ) : (
          <style jsx global>
            {prismDark}
          </style>
        )}

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
      </ThemeContext.Provider>
    </div>
  );
}

export { ThemeContext };
