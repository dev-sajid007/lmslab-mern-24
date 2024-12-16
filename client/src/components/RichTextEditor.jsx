import React, { useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import './RichTextEditor.css';

const  RichTextEditor = ({input,setInput}) => {

  const ChangeHandler = (value) => {
    setInput({...input,description:value})
  }
  return <ReactQuill theme="snow" value={input.description} onChange={ChangeHandler} />;
}

export default RichTextEditor;