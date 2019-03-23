import React, { Component } from 'react';
import './App.css';
import marked from 'marked';
import jquery from 'jquery';
class MarkdownApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: defaultState.text,
      editorMaximized: false,
      previewerMaximized: false
    };
    this.updateText = this.updateText.bind(this);
    this.setDefaultSize = this.setDefaultSize.bind(this);
  }

  updateText = (newText) => {
    this.setState({
      text: newText.target.value
    });
    document.getElementById('preview').innerHTML =
      marked(newText.target.value);
  }

  setDefaultSize = () => {
    this.setState({
      editorMaximized: false,
      previewerMaximized: false
    });
  };
  editorMaximize = () => {
    this.setState({
      editorMaximized: true,
      previewerMaximized: false
    });
  };
  previewMaximize = () => {
    this.setState({
      editorMaximized: false,
      previewerMaximized: true
    });
  };
  render() {
    if(this.state.editorMaximized == true){
    }
    return (
    <div>
      <div id = "editorWindow">
        <div className = "windowTop">
          <h3 className = "windowTitle" ><i className="fas fa-pencil-alt"></i> Editor</h3>
        </div>
        <textarea id = "editor" value = {this.state.text} onChange = {this.updateText}/>
      </div>

      <div id = "previewerWindow">
        <div className = "windowTop">
          <h3 className = "windowTitle" ><i className="fas fa-file-alt"></i> Previewer</h3>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
          <div id='preview' dangerouslySetInnerHTML={{__html: marked(defaultState.text)}}/>
      </div>
    </div>
  );
  }
}
export default MarkdownApp;

/*________________________________Data______________________________________*/

const defaultState = {
  text: `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`
};
