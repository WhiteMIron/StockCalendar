import React, { useEffect, useState } from 'react';
import Layout from '@components/Layout';
import styled from '@emotion/styled';
import fetcher from '@utils/fetcher';
import { IUser } from '@typings/db';
import useSWR from 'swr';
import { useNavigate } from 'react-router';
import person from '@images/person.png';
import register from '@images/register.png';
import interest from '@images/interest.png';
import category from '@images/category.png';
import axios from 'axios';
import defines from '@constants/defines';
import Loading from '@components/Loading/Loading';

interface ImyPageInfo {
  stockTotalCount: string;
  categoryTotalCount: string;
  interestTotalCount: string;
}

const MyPage = () => {
  const {
    data: userData,
    error,
    revalidate,
    mutate,
  } = useSWR<IUser | false>(`/api/users`, fetcher, {
    dedupingInterval: 2000, // 2초
  });
  const navigate = useNavigate();
  const [myPageInfo, setMyPageInfo] = useState<ImyPageInfo>();
  const [loading, setLoading] = useState(false);
  if (!userData) {
    navigate('/login');
  }

  useEffect(() => {
    axios
      .get(`/api/total-count-info`)
      .then((response) => {
        setMyPageInfo(response.data);
        setTimeout(() => {
          setLoading(true);
        }, 200);
      })
      .catch((error) => {});
  }, []);

  return (
    <Layout user={userData}>
      {loading ? (
        <Container>
          <ContentBox>
            <UserInfoContainer>
              <UserInfoBox>
                <ImageBox>
                  <img height="200px" src={person}></img>
                </ImageBox>
                {userData ? <NameInfo>{userData.email}</NameInfo> : null}
              </UserInfoBox>
            </UserInfoContainer>
            <ActivityInfoContainer>
              <ActivityInfoBox>
                <StockInfoContainer>
                  <InfoBox>
                    <ImageBox>
                      <img height="140px" src={register}></img>
                    </ImageBox>
                    <ActivityTitle>
                      <strong>등록 종목 수</strong>
                    </ActivityTitle>
                    <Info>{myPageInfo?.stockTotalCount}</Info>
                  </InfoBox>
                </StockInfoContainer>
                <InterestInfo>
                  <InfoBox>
                    <ImageBox>
                      <img height="140px" src={interest}></img>
                    </ImageBox>
                    <ActivityTitle>
                      <strong>관심 종목 수</strong>
                    </ActivityTitle>
                    <Info>{myPageInfo?.interestTotalCount}</Info>
                  </InfoBox>
                </InterestInfo>
                <CategoryInfo>
                  <InfoBox>
                    <ImageBox>
                      <img height="140px" src={category}></img>
                    </ImageBox>
                    <ActivityTitle>
                      <strong>카테고리 수</strong>
                    </ActivityTitle>
                    <Info>{myPageInfo?.categoryTotalCount}</Info>
                  </InfoBox>
                </CategoryInfo>
              </ActivityInfoBox>
            </ActivityInfoContainer>
          </ContentBox>
        </Container>
      ) : (
        <Loading />
      )}
    </Layout>
  );
};

export default MyPage;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

const UserInfoBox = styled.div`
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05),
    inset 0px 1px 0px rgba(255, 255, 255, 0.1);
  background: #fff;
  padding: 20px;
`;
const UserInfoContainer = styled.div`
  margin-bottom: 50px;
  font-size: 50px;
  padding: 0 20px;
`;

const Info = styled.div`
  margin-top: 5px;
  font-size: 50px;
`;

const ActivityTitle = styled.div`
  font-size: 20px;
  margin-top: 10px;
`;

const StockInfoContainer = styled.div`
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05),
    inset 0px 1px 0px rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-right: 20px;
`;

const InterestInfo = styled.div`
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05),
    inset 0px 1px 0px rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-right: 20px;
`;

const CategoryInfo = styled.div`
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05),
    inset 0px 1px 0px rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ActivityInfoContainer = styled.div`
  margin-bottom: 40px;
`;

const ActivityInfoBox = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NameInfo = styled.div`
  margin-top: 5px;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
