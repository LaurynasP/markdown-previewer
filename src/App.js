import React, { Component } from 'react';
import { createStore, dispatch } from 'redux';
import './App.css';
/*________________________________Redux______________________________________*/

//Reducers
function editorReducer(state = {text: "Type to edit!"}, action) {
  switch (action.type) {
    case "UPDATE": return {
      text: action.text
    };
    default: return null;
  }
}

function previewerReducer(state, action) {
  switch(action.type) {
    default: return null;
  }
}

//Store

const store = createStore(editorReducer);

//Action creators

const updateText = (newText) => {
  return {
    type: "UPDATE",
    text: newText
  }
};

/*________________________________React______________________________________*/

class Editor extends Component {
  render() {
    return (
      <div id = "editorWindow">
        <div class = "windowTop">
          <h3 class = "windowTitle" ><i class="fas fa-pencil-alt"></i> Editor</h3>
        </div>
        <textarea id = "editor" />
      </div>
    );
  }
}

class Previewer extends Component {
  render() {
    return (
      <div id = "previewerWindow">
        <div class = "windowTop">
          <h3 class = "windowTitle" ><i class="fas fa-file-alt"></i> Previewer</h3>
        </div>
        <p>
        </p>
      </div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Editor />
        <Previewer />
      </div>
    );
  }
}

export default App;
