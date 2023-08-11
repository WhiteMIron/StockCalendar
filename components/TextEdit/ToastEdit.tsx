import { Editor, EditorProps, Viewer } from '@toast-ui/react-editor';
import React, { SetStateAction, useEffect, useRef, useState } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';

import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

import '@toast-ui/editor/dist/i18n/ko-kr';
import DOMPurify from 'dompurify';
import styled from '@emotion/styled';
import { isEmpty } from '@utils/common';

interface IToastEditProps {
  stockIssue: string;
  setStockIssue: React.Dispatch<SetStateAction<string>>;
}
const ToastEdit = ({ stockIssue, setStockIssue }: IToastEditProps) => {
  const customToolbarItems = [['heading', 'bold'], ['hr'], ['ul', 'ol', 'task']];
  const editorRef = useRef<Editor | null>(null);

  const onBlurHandler = () => {
    if (editorRef.current) {
      const content = editorRef.current.getInstance().getMarkdown();
      const data = editorRef.current.getInstance().getHTML();
      const sanitizedHtml = DOMPurify.sanitize(data);

      const trimmedContent = content.replace(/<br>/gi, '').replace(/\n/g, '').trim();

      if (!isEmpty(trimmedContent)) {
        setStockIssue(sanitizedHtml);
      } else {
        setStockIssue('');
      }
    }
  };
  return (
    <>
      <Editor
        initialValue={stockIssue}
        placeholder="이슈를 작성해주세요."
        height="350px"
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
    </>
  );
};

export default ToastEdit;
