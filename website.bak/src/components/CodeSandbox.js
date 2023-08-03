import React from 'react';
import CodeSandbox from '@uiw/react-codesandbox';

const code = `import React from 'react';
import ReactDOM from 'react-dom';

const App = (
  <h1>
    TRALALA, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);`;

export const Demo = () => {
  return (
    <div style={{ height: 400, width: 800 }}>
      <CodeSandbox
        embed
        query="view=split&runonclick=1"
        files={{
          "package.json": {
            content: {
              dependencies: {
                react: "latest",
                "react-dom": "latest"
              }
            }
          },
          "index.js": {
            content: code
          },
          "index.html": {
            content: `<div id="root"></div>`
          }
        }}
      />
    </div>
  )
}
