import { Editor, Viewer } from '@toast-ui/react-editor';
import React, { SetStateAction, useEffect, useRef, useState } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';

import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

import '@toast-ui/editor/dist/i18n/ko-kr';
import DOMPurify from 'dompurify';
import styled from '@emotion/styled';

interface IToastEditProps {
  stockIssue?: string;
  setStockIssue?: React.Dispatch<SetStateAction<string>>;
}
const Test = () => {
  const customToolbarItems = [['heading', 'bold'], ['hr'], ['ul', 'ol', 'task']];
  const editorRef = useRef<Editor | null>(null);
  const [htmlString, setHtmlString] = useState(''); // 초기값 설정

  const onChange = () => {
    if (editorRef.current) {
      const data = editorRef.current.getInstance().getHTML();
      const sanitizedHtml = DOMPurify.sanitize(data);

      setHtmlString(sanitizedHtml);
    }
  };

  const test = () => {};
  return (
    <>
      <Editor
        placeholder="이슈를 작성해주세요."
        previewStyle="vertical"
        height="400px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        usageStatistics={false}
        toolbarItems={customToolbarItems}
        plugins={[colorSyntax]}
        hideModeSwitch={true}
        language="ko-KR"
        ref={editorRef}
        onChange={onChange}
      />
    </>
  );
};

export default Test;
