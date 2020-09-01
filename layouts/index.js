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
          <meta property="og:type" content="blog" />
          <meta
            property="og:url"
            content={`https://nikhilkumaran.vercel.app/${slug}`}
          />
          <meta property="og:description" content={frontMatter.summary} />
          <meta name="twitter:card" content="summary_large_image" />
          {frontMatter.image && (
            <meta
              property="og:image"
              content={`https://nikhilkumaran.vercel.app/images/blog/${frontMatter.image}`}
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
