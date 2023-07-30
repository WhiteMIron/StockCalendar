import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import edit from '@images/edit.png';
import { Button } from './styles';
import useInput from '@hooks/useInput';
import axios from 'axios';

interface StocksTodayMemoProps {
  selectedDate: string;
}
const StocksTodayMemo = ({ selectedDate }: StocksTodayMemoProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const [summary, onSummary, setSummary] = useInput('');
  const summaryTextBox = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (summaryTextBox.current) {
      summaryTextBox.current.focus();
    }
  }, [isEdit]);

  useEffect(() => {
    setSummary('');
    axios
      .get('/api/summary', {
        params: { date: selectedDate },
      })
      .then((response) => {
        if (response.data.content) {
          setSummary(response.data.content);
        }
      })
      .catch((error) => {
        console.log(error.response);
      })
      .finally(() => {});
  }, [selectedDate]);

  const onSubmit = () => {
    axios
      .post('/api/summary', {
        content: summary,
        date: selectedDate,
      })
      .then((response) => {
        setSummary(response.data.content);
        setIsEdit(!isEdit);
      })
      .catch((error) => {
        console.log(error.response);
      })
      .finally(() => {});
  };

  return (
    <Container>
      <TitleBox>
        <strong>오늘의 증시 요약</strong>
        {!isEdit ? (
          <>
            <button
              style={{
                border: 'none',
                background: 'none',
                cursor: 'pointer',
              }}
              onClick={() => {
                setIsEdit(!isEdit);
              }}
              title="편집"
            >
              <img src={edit} alt="편집"></img>
            </button>{' '}
          </>
        ) : (
          <>
            <Button color="#fff" bgColor="dodgerblue" height="22px" marginLeft="5px" onClick={onSubmit}>
              저장
            </Button>
          </>
        )}
      </TitleBox>
      {!isEdit ? (
        <TextBox>
          {summary.split('\n').map((line) => {
            return (
              <span key="1">
                {line}
                <br />
              </span>
            );
          })}
        </TextBox>
      ) : (
        <TextArea value={summary} onChange={onSummary} ref={summaryTextBox}></TextArea>
      )}
    </Container>
  );
};

const TextBox = styled.div`
  word-break: break-all;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: white;
  border: 1px rgba(0, 0, 0, 0.2) solid;
  overflow-y: auto;
  padding: 20px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: white;
  overflow-y: auto;
`;
const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  border: 1px rgba(0, 0, 0, 0.2) solid;
  overflow-y: auto;
  border-radius: 8px;
  resize: none;
  /* border: 1px solid #dadada; */
  &:focus {
    border: 1px solid #25d790;
  }
`;
const TitleBox = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px 0;
  margin-bottom: 5px;
`;

export default StocksTodayMemo;
