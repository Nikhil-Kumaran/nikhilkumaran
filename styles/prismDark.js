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
  :not(pre) > code[class*="language-"] {
    background: #011627;
  }

  .token.changed {
    color: #a2bffc;
  }
  .token.deleted {
    color: #ef535090;
  }
  .token.inserted {
    color: #addb67;
  }
  .token.string {
    color: #addb67;
  }
  .token.attr-name {
    color: #addb67;
  }
  .token.url {
    color: #addb67;
  }
  .token.comment {
    color: #637777;
  }
  .token.variable {
    color: #ecc48d;
  }
  .token.number {
    color: #f78c6c;
  }
  .token.builtin {
    color: #82aaff;
  }
  .token.char {
    color: #82aaff;
  }
  .token.constant {
    color: #82aaff;
  }
  .token.punctuation {
    color: #c792ea;
  }
  .token.function {
    color: #c792ea;
  }
  .token.selector {
    color: #c792ea;
  }
  .token.doctype {
    color: #c792ea;
  }
  .token.class-name {
    color: #ffcb8b;
  }
  .token.tag {
    color: #7fdbca;
  }
  .token.operator {
    color: #7fdbca;
  }
  .token.keyword {
    color: #7fdbca;
  }
  .token.property-access {
    color: #c792ea;
  }
  .token.boolean {
    color: #ff5874;
  }
  .token.property {
    color: #80cbc4;
  }
  .token.namespace {
    color: #b2ccd6;
  }
  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  code[class*="language-"],
  pre[class*="language-"] {
    color: #f7fafc;
  }

  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background: #1a202c;
    border: 1px solid #2d3748;
  }

  .mdx-marker {
    background-color: #2d3748;
  }

  .remark-code-title {
    background: #2d3748;
    color: #edf2f7;
    border: 1px solid #2d3748;
  }
`;
