// import { MemoContainer } from '@pages/Test/styles';

import { css } from '@emotion/react';
import { DownAmount, DownButton, DownPrice, MemoContainer, Table, Tbody, Td, Th, Tr } from './styles';
import React from 'react';
import arrow from '@images/sp_ico5.png';
const StocksReadMemo = () => {
  let link = 'https://finance.naver.com/item/main.nhn?code=';
  let code = '417010';
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
                <a href="aaa" target="_blank">
                  <strong>루닛</strong>
                </a>
              </Td>
            </Tr>
            <Tr>
              <Th>종목코드</Th>
              <Td>328130</Td>
            </Tr>

            <Tr>
              <Th>종가</Th>
              <Td>
                <DownPrice>
                  <strong>41,000</strong>
                </DownPrice>
                <DownAmount>4,200 (-4.11%)</DownAmount>
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
