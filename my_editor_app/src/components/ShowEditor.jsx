import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';



export default class ShowEditor extends Component {
  state = {
    editorState: EditorState.createEmpty(),
    htmlData: false
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  getCodeHtml = (state) => {
    this.setState({ htmlData: true });
  }


  render() {
    const { editorState } = this.state;
    return (
      <div>
        <header className="App-editor">
          Rich Text Editor
        </header>
        <div style={{
          height: '200px',
          width: '700px',
          marginLeft: '270px'
        }}>
          <Editor
            editorState={editorState}
            onEditorStateChange={this.onEditorStateChange}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class" />

          <button onClick={this.getCodeHtml}>Output HTML</button>

          {this.state.htmlData ? <textarea style={{ marginTop: '10px', width: '700px' }}
            disabled
            value={draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))}
          /> : ''}

        </div>


      </div>
    );
  }
}