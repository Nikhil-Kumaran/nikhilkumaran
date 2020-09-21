import Layout from "../components/Layout";
import Head from "next/head";
import { siteTitle } from "../utils/constants";
import DateComponent from "../components/DateComponent";
import utilStyles from "../styles/utils.module.css";

const MDXLayout = (frontMatter) => {
  const slug = frontMatter.__resourcePath.replace(".mdx", "");

  return ({ children }) => {
    return (
      <Layout post>
        <Head>
          <title>
            {frontMatter.title} - {siteTitle}
          </title>
          <meta property="og:title" content={frontMatter.title} />
          <meta property="og:type" content="article" />
          <meta
            property="og:url"
            content={`https://nikhilkumaran.dev/${slug}`}
          />
          <meta name="description" content={frontMatter.summary} />
          <meta property="og:description" content={frontMatter.summary} />
          <meta name="twitter:card" content="summary_large_image" />
          {frontMatter.image && (
            <meta
              property="og:image"
              content={`https://nikhilkumaran.dev/images/blog/${frontMatter.image}`}
            />
          )}
          {frontMatter.canonicalUrl ? (
            <link rel="canonical" href={frontMatter.canonicalUrl} />
          ) : (
            <link
              rel="canonical"
              href={`https://nikhilkumaran.dev/${slug}`}
            />
          )}
        </Head>
        {frontMatter.image && (
          <div className="blogImage">
            <img
              src={`/images/blog/${frontMatter.image}`}
              alt={frontMatter.title}
            />
          </div>
        )}
        <div className="title">
          <h1>{frontMatter.title}</h1>
          <small className={utilStyles.lightText}>
            <DateComponent dateString={frontMatter.date} />
          </small>
        </div>
        {children}
      </Layout>
    );
  };
};

export default MDXLayout;
