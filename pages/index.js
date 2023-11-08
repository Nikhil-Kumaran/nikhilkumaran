import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import { siteTitle, name } from "../utils/constants";
import BlogPost from "../components/BlogPost";
import utilStyles from "../styles/utils.module.css";
import Twitter from "../public/images/twitter.svg";
import GitHub from "../public/images/github.svg";
import LinkedIn from "../public/images/linkedin.svg";
import DEV from "../public/images/dev-dot-to.svg";
import Pen from "../public/images/pen.svg";
import Npm from "../public/images/npm.svg";

import { frontMatter as createReactApp } from "./blog/dont-use-create-react-app.mdx";
import { frontMatter as reactPerformance } from "./blog/react-performance-improvements.mdx";

const Index = () => {
  return (
    <Layout>
      <Head>
        <title>Home - {siteTitle}</title>
        <meta property="og:title" content={name} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nikhilkumaran.dev" />
        <meta property="og:image" content="https://nikhilkumaran.dev/images/nikhil.png" />
        <meta property="og:description" content="Frontend developer | ReactJS | Tech Writer/Speaker | Mentor" />
        <meta name="description" content="Frontend developer | ReactJS | Tech Writer/Speaker | Mentor" />
      </Head>
      <p className="about">
        <p>Hi, I'm Nikhil Kumaran S, Senior Frontend Developer, with expertise in React.js with TypeScript.</p>

        <p>
          I have 5 years of experience in architecting projects by bringing in the best tools, implementing best practices, and making apps scalable
          and maintainable in the long run. This includes setting up the folder structure, state management, authentication, data fetching, routing,
          rendering, styling, and testing.
        </p>

        <p>
          Beyond coding, I'm passionate about community contribution, from writing educational blog posts to delivering tech talks and actively
          supporting open-source initiatives.
        </p>
      </p>
      <br />
      <div className={utilStyles.socialIcons}>
        <a className={`${utilStyles.socialIcon} ${utilStyles.twitter}`} href="https://twitter.com/iNikhilKumaran">
          <Twitter />
        </a>
        <a className={`${utilStyles.socialIcon} ${utilStyles.github}`} href="https://github.com/Nikhil-Kumaran">
          <GitHub />
        </a>
        <a className={`${utilStyles.socialIcon} ${utilStyles.linkedin}`} href="https://www.linkedin.com/in/nikhilkumaran">
          <LinkedIn />
        </a>
        <a className={`${utilStyles.socialIcon} ${utilStyles.npm}`} href="https://www.npmjs.com/~nikhil-kumaran">
          <Npm />
        </a>
        <a className={`${utilStyles.socialIcon}`} href="https://codepen.io/NikhilKumaran">
          <Pen />
        </a>
        <a className={`${utilStyles.socialIcon} ${utilStyles.dev}`} href="https://dev.to/nikhilkumaran">
          <DEV />
        </a>
      </div>
      <br />
      <h1>Popular blog posts</h1>
      <ul className={utilStyles.list}>
        <BlogPost {...createReactApp} />
        <BlogPost {...reactPerformance} />
      </ul>
    </Layout>
  );
};

export default Index;
