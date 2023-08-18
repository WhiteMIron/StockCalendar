import { css } from '@emotion/react';
import {
  BtnGroup,
  Button,
  DiffAmount,
  DownPrice,
  Icon,
  Input,
  PriceBox,
  ReadMemoContainer,
  SamePrice,
  StockItem,
  Table,
  Tbody,
  Td,
  Th,
  Tr,
  UpPrice,
} from './styles';
import React, { SetStateAction, useEffect, useState } from 'react';
import { Istock } from '@typings/stock';
import link from '@images/link.png';
import crown from '@images/crown.png';
import { isEmpty } from '@utils/common';
import styled from '@emotion/styled';
import ModalPortal from '@components/Modal/ModalPotal';
import { CSSTransition } from 'react-transition-group';
import BackDrop from '@components/Modal/BackDrop';
import Modal from '@components/Modal/Modal';
import axios from 'axios';
import { Icategory } from '@typings/category';
import useInput from '@hooks/useInput';
import defines from '@constants/defines';
interface CategoryReadMemoProps {
  categorys: Icategory[];
  setCategorys: React.Dispatch<SetStateAction<Icategory[]>>;
  selectedCategory: Icategory | null;
  setIsRead: React.Dispatch<SetStateAction<boolean>>;
}

const CategoryReadMemo = ({ categorys, setCategorys, selectedCategory, setIsRead }: CategoryReadMemoProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModal = () => {
    setModalOpen(!modalOpen);
  };
  const [stocks, setStocks] = useState<Istock[]>([]);
  const [isEdit, setIsEdit] = useState(false);

  const [categoryName, onChangeCategoryName, setCategoryName] = useInput('');
  const onSubmit = () => {
    axios
      .put(`/api/category/${selectedCategory?.id}`, {
        categoryName: categoryName,
      })
      .then((response) => {
        setCategorys(
          categorys.map((category) => {
            if (category.id === response.data.id) {
              return {
                ...category,
                ...response.data,
              };
            } else return category;
          }),
        );
        setIsEdit(false);
        alert('수정되었습니다.');
      })
      .catch((error) => {})
      .finally(() => {});
  };

  const onDeleteSubmit = () => {
    axios
      .delete(`/api/category/${selectedCategory?.id}`)
      .then((response) => {
        setCategorys(categorys.filter((category) => category.id !== selectedCategory?.id));
        alert('삭제되었습니다.');
        setIsRead(false);
      })
      .catch((error) => {
        alert(error.response.data);
      })
      .finally(() => {});
  };

  useEffect(() => {
    setCategoryName(selectedCategory!!.name);
    setIsEdit(false);

    axios
      .get(`/api/stock-in-category`, {
        params: {
          categoryName: selectedCategory?.name,
        },
      })
      .then((response) => {
        setStocks(response.data);
      })
      .catch((error) => {})
      .finally(() => {});
    return;
  }, [selectedCategory!!.name]);
  return (
    <ReadMemoContainer>
      <Table>
        <colgroup>
          <col
            css={css`
              width: 30%;
            `}
          ></col>
          <col
            css={css`
              width: 70%;
            `}
          ></col>
        </colgroup>
        <Tbody>
          <Tr>
            <Th>카테고리명</Th>
            <Td>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  position: 'relative',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                  }}
                >
                  {!isEdit ? (
                    <>
                      <StockInfo>{categoryName}</StockInfo>
                    </>
                  ) : (
                    <>
                      <Input value={categoryName || ''} onChange={onChangeCategoryName}></Input>
                    </>
                  )}
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexShrink: 0,
                  }}
                >
                  {!isEdit ? (
                    <>
                      {' '}
                      <Button
                        marginRight="5px"
                        bgColor="#00BB9D"
                        padding="0 10px"
                        onClick={() => {
                          setIsEdit(true);
                        }}
                      >
                        수정
                      </Button>
                      <Button
                        bgColor="#8e8e8e"
                        padding="0 10px"
                        onClick={() => {
                          handleModal();
                        }}
                      >
                        삭제
                      </Button>
                    </>
                  ) : (
                    <>
                      {' '}
                      <Button
                        marginRight="5px"
                        bgColor="#fff"
                        color="#00BB9D"
                        padding="0 10px"
                        isBorder={true}
                        onClick={() => {
                          setIsEdit(false);
                          setCategoryName(selectedCategory!.name);
                        }}
                      >
                        취소
                      </Button>
                      <Button
                        bgColor="#00BB9D"
                        color="#fff"
                        padding="0 10px"
                        onClick={() => {
                          handleModal();
                        }}
                      >
                        저장
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </Td>
          </Tr>
          <Tr>
            <Th>종목 수</Th>
            <Td>{stocks.length}</Td>
          </Tr>
          {!isEmpty(stocks) ? (
            <Tr>
              <Th>종목 리스트</Th>
              <Td>
                {stocks.map((stock: Istock, index: number, arr) => {
                  let string = stock.name;
                  if (index != arr.length - 1) {
                    string += ', ';
                  }
                  return string;
                })}{' '}
              </Td>{' '}
            </Tr>
          ) : (
            <></>
          )}
        </Tbody>
      </Table>

      <ModalPortal onClose={handleModal}>
        <CSSTransition
          in={modalOpen}
          mountOnEnter
          unmountOnExit
          timeout={{ enter: 300, exit: 100 }}
          classNames="backdrop"
        >
          <BackDrop onClose={() => setModalOpen(false)} />
        </CSSTransition>

        <CSSTransition in={modalOpen} mountOnEnter unmountOnExit timeout={{ enter: 300, exit: 100 }} classNames="modal">
          {!isEdit ? (
            <>
              <Modal title={'삭제하시겠습니까?'}>
                <BtnGroup justifyContent="center">
                  <Button
                    type="button"
                    width="25%"
                    onClick={() => {
                      setModalOpen(false);
                    }}
                    bgColor="#8e8e8e"
                    marginRight="10px"
                    marginBottom="20px"
                  >
                    취소
                  </Button>

                  <Button
                    type="button"
                    width="25%"
                    onClick={(e) => {
                      onDeleteSubmit();
                      setModalOpen(false);
                    }}
                    bgColor="#00BB9D"
                  >
                    삭제
                  </Button>
                </BtnGroup>
              </Modal>
            </>
          ) : (
            <>
              <Modal title={'저장하시겠습니까?'}>
                <BtnGroup justifyContent="center">
                  <Button
                    type="button"
                    width="25%"
                    onClick={() => {
                      setModalOpen(false);
                    }}
                    bgColor="#8e8e8e"
                    marginRight="10px"
                    marginBottom="20px"
                  >
                    취소
                  </Button>

                  <Button
                    type="button"
                    width="25%"
                    onClick={(e) => {
                      onSubmit();
                      setModalOpen(false);
                    }}
                    bgColor="#00BB9D"
                  >
                    저장
                  </Button>
                </BtnGroup>
              </Modal>
            </>
          )}
        </CSSTransition>
      </ModalPortal>
    </ReadMemoContainer>
  );
};

const TextBox = styled.div`
  word-break: break-all;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: white;
  overflow-y: auto;
`;

const StockInfo = styled.div`
  display: flex;
  align-items: center;
  & > span {
    display: block;
    text-align: left;
    font-size: 15px;
    cursor: pointer;
    line-height: 1.46666667;
  }
`;
export default CategoryReadMemo;
