import BlogPost from "../components/BlogPost";
import { frontMatter as blogPosts } from "./blog/**/*.mdx";
import Layout from "../components/Layout";
import Head from "next/head";
import { siteTitle } from "../utils/constants";
import utilStyles from "../styles/utils.module.css";

const Blog = () => {
  const filteredBlogPosts = blogPosts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });

  return (
    <Layout home>
      <Head>
        <title>Blog - {siteTitle}</title>
        <meta property="og:title" content={`Blog - ${siteTitle}`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://nikhilkumaran.dev/blog"
        />
        <meta
          property="og:image"
          content="https://nikhilkumaran.dev/images/profile.jpeg"
        />
        <meta
          property="og:description"
          content="List of all blog posts by Nikhil Kumaran"
        />
        <meta
          name="description"
          content="List of all blog posts by Nikhil Kumaran"
        />
      </Head>
      <h1>All Posts</h1>
      <ul className={utilStyles.list}>
        {filteredBlogPosts.map((frontMatter) => (
          <BlogPost key={frontMatter.title} {...frontMatter} />
        ))}
      </ul>
    </Layout>
  );
};

export default Blog;
