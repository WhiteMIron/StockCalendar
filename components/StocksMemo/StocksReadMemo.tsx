// import { MemoContainer } from '@pages/Test/styles';

import { css } from '@emotion/react';
import {
  Button,
  DownAmount,
  DownButton,
  DownPrice,
  Icon,
  MemoContainer,
  StockInfo,
  Table,
  Tbody,
  Td,
  Th,
  Tr,
} from './styles';
import React, { SetStateAction } from 'react';
import { Istock } from '@typings/stock';
import { stockItem } from '@mockup/stockItem';
import link from '@images/link.png';
interface StocksReadMemoProps {
  setIsRecord: React.Dispatch<SetStateAction<boolean>>;
  setIsSelected: React.Dispatch<SetStateAction<boolean>>;
  setIsEditRecord: React.Dispatch<SetStateAction<boolean>>;
  selectedItem: Istock | null;
}
const StocksReadMemo = ({ setIsRecord, setIsSelected, setIsEditRecord, selectedItem }: StocksReadMemoProps) => {
  let financeAddress = 'https://finance.naver.com/item/main.nhn?code=';

  return (
    <MemoContainer>
      <div>
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
              <Th>종목명</Th>
              <Td>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    position: 'relative',
                  }}
                >
                  <a href={financeAddress + selectedItem?.stock_code} target="_blank">
                    <StockInfo>
                      {selectedItem!!.name}
                      <Icon>
                        <img src={link} width="13px" height="13px"></img>
                      </Icon>
                      <span>네이버증권으로 이동합니다.</span>
                    </StockInfo>
                  </a>{' '}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      position: 'absolute',
                      right: '10',
                    }}
                  >
                    <Button
                      marginRight="10px"
                      bgColor="#76baff"
                      padding="0 10px"
                      onClick={() => {
                        setIsSelected(false);
                        setIsRecord(false);
                        setIsEditRecord(true);
                      }}
                    >
                      수정
                    </Button>
                    <Button bgColor="#8e8e8e" padding="0 10px">
                      {' '}
                      삭제
                    </Button>
                  </div>
                </div>
              </Td>
            </Tr>
            <Tr>
              <Th>종목코드</Th>
              <Td>{selectedItem!!.stock_code}</Td>
            </Tr>

            <Tr>
              <Th>종가</Th>
              <Td>
                <DownPrice>
                  <strong>{selectedItem!!.current_price}</strong>
                </DownPrice>
                <DownAmount>
                  {selectedItem?.diff_price} ({selectedItem!!.days_range})
                </DownAmount>
              </Td>
            </Tr>

            <Tr>
              <Th>이슈</Th>
              <Td>
                <p>
                  MSCI는 미국 투자은행 모건스탠리의 자회사 모건스탠리캐피털인터내셔널이 발표하는 지수다. 국제금융 펀드의
                  투자 기준이 되는 주요 지표다. 매년 2·5·8·11월마다 분야별 구성 종목의 편·출입을 발표한다. 이달 발표한
                  글로벌 스몰캡 분야에는 루닛을 포함한 31개 국내 기업이 새로 편입됐다.
                </p>
              </Td>
            </Tr>
            <Tr>
              <Th rowSpan={2}>뉴스</Th>
              <Td>
                <a>https://www.hankyung.com/it/article/202305167019i</a>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <a href="https://www.hankyung.com/it/article/202305167019i" target="_blank">
                  https://www.hankyung.com/it/article/202305167019i
                </a>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </div>
    </MemoContainer>
  );
};

export default StocksReadMemo;
