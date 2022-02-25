import store from "../../store";
import { observer } from "mobx-react-lite";
import SyntaxHighlighter from "react-syntax-highlighter";
import React from "react";

function Code(props) {
  return (
    <>
      {props.html && (
        <SyntaxHighlighter
          language="xml"
          style={store.themeStyle}
          showLineNumbers={!props.showLineNumbers}
        >
          {props.html}
        </SyntaxHighlighter>
      )}

      {props.css && (
        <SyntaxHighlighter
          language="css"
          style={store.themeStyle}
          showLineNumbers={!props.showLineNumbers}
        >
          {props.css}
        </SyntaxHighlighter>
      )}
    </>
  );
}

export default observer(Code);
