import styles from "./MDXComponents.module.css";
import Codesandbox from "./Codesandbox";

const MDXComponents = {
  h1: (props) => <h1 {...props} />,
  h2: (props) => <h2 className={styles.h2} {...props} />,
  h3: (props) => <h3 className={styles.h3} {...props} />,
  inlineCode: (props) => <code className={styles.code} {...props} />,
  br: (props) => <br {...props} />,
  hr: <hr />,
  a: (props) => <a {...props} />,
  p: (props) => <p className={styles.p} {...props} />,
  ul: (props) => <ul className={styles.ul} {...props} />,
  ol: (props) => <ol className={styles.ol} {...props} />,
  li: (props) => <li className={styles.li} {...props} />,
  blockquote: (props) => <div className={styles.pre} {...props} />,
  Codesandbox: (props) => (
    <Codesandbox className={styles.codesandbox} {...props} />
  ),
};

export default MDXComponents;
