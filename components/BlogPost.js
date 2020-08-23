import React from "react";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import style from "./BlogPost.module.css";
import DateComponent from "./DateComponent";

const BlogPost = (frontMatter) => {
  const { title, summary, date } = frontMatter;

  const slug = frontMatter.__resourcePath
    .replace("blog/", "")
    .replace(".mdx", "");

  return (
    <li className={utilStyles.listItem}>
      <Link href={`blog/${slug}`}>
        <a className={style.title}>{title}</a>
      </Link>
      <p>{summary}</p>
      <small className={utilStyles.lightText}>
        <DateComponent dateString={date} />
      </small>
    </li>
  );
};

export default BlogPost;
