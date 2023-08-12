import { Editor, EditorProps, Viewer } from '@toast-ui/react-editor';
import React, { SetStateAction, useEffect, useRef, useState } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';

import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

import '@toast-ui/editor/dist/i18n/ko-kr';
import DOMPurify from 'dompurify';
import { isEmpty } from '@utils/common';
import styled from '@emotion/styled';

interface IToastEditProps {
  placeHolder?: string;
  height: string;
  content: string;
  setContent: React.Dispatch<SetStateAction<string>>;
}
const ToastEdit = ({ placeHolder, height, content, setContent }: IToastEditProps) => {
  const customToolbarItems = [['heading', 'bold'], ['hr'], ['ul', 'ol', 'task']];
  const editorRef = useRef<Editor | null>(null);

  const onBlurHandler = () => {
    if (editorRef.current) {
      const content = editorRef.current.getInstance().getMarkdown();
      const data = editorRef.current.getInstance().getHTML();
      const sanitizedHtml = DOMPurify.sanitize(data);

      const trimmedContent = content.replace(/<br>/gi, '').replace(/\n/g, '').trim();

      if (!isEmpty(trimmedContent)) {
        setContent(sanitizedHtml);
      } else {
        setContent('');
      }
    }
  };
  return (
    <>
      {/* <Container> */}
      <Editor
        initialValue={content}
        placeholder={placeHolder}
        height={height}
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        usageStatistics={false}
        toolbarItems={customToolbarItems}
        plugins={[colorSyntax]}
        hideModeSwitch={true}
        language="ko-KR"
        ref={editorRef}
        onBlur={onBlurHandler}
      />
      {/* </Container> */}
    </>
  );
};

const Container = styled.div`
  /* border: 1px solid #dadada; */
`;

export default ToastEdit;
