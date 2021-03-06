import css from "styled-jsx/css";

export default css.global`
  code {
    white-space: pre;
  }
  code[class*="language-"],
  pre[class*="language-"] {
    color: #1a202c;
    background: none;
    font-size: 14px;
    text-align: left;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    width: 100%;
  }
  /* Code blocks */
  pre[class*="language-"] {
    padding: 1rem;
    margin: 1.5rem 0;
    overflow: auto;
    min-width: 100%;
    font-size: 0.9rem;
    white-space: nowrap;
  }
  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background: #f7fafc;
    border: 1px solid #e2e8f0;
    border-radius: 3px;
  }
  /* Inline code */
  :not(pre) > code[class*="language-"] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: slategray;
  }
  .token.punctuation {
    color: #999;
  }
  .token.namespace {
    opacity: 0.7;
  }
  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #905;
  }
  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #690;
  }
  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: #9a6e3a;
  }
  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: #07a;
  }
  .token.function,
  .token.class-name {
    color: #dd4a68;
  }
  .token.regex,
  .token.important,
  .token.variable {
    color: #e90;
  }
  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }
  .token.entity {
    cursor: help;
  }

  .mdx-marker {
    display: block;
    margin-left: -1rem;
    margin-right: -1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    background-color: #e2e8f0;
    box-shadow: inset 3px 0px 0 0px #2a69ac;
    min-width: fit-content;
  }

  .remark-code-title {
    padding: 0.5rem 1rem;
    background: #e2e8f0;
    color: #1a202c;
    border: 1px solid #e2e8f0;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    font-size: 0.8rem;
    font-weight: 700;
    margin-bottom: 0;
    width: 100%;
  }
`;
