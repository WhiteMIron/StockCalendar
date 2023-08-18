import CategoryList from '@components/CategoryList/CategoryList';
import Layout from '@components/Layout';
import styled from '@emotion/styled';
import { IUser } from '@typings/db';
import { Icategory } from '@typings/category';
import fetcher from '@utils/fetcher';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { DateInfoGroup } from '@pages/Interest';
import { DateInfo } from '@pages/StockRecord/styles';
import defines from '@constants/defines';
import { useNavigate } from 'react-router';
import CategoryReadMemo from '@components/CategoryMemo/CategoryReadMemo';
import { isEmpty } from '@utils/common';
import NoData from '@components/NoData';
import Loading from '@components/Loading/Loading';

const CategoryEdit = () => {
  const {
    data: userData,
    error,
    revalidate,
    mutate,
  } = useSWR<IUser | false>(`/api/users`, fetcher, {
    dedupingInterval: 2000, // 2초
  });

  const navigate = useNavigate();
  const [categorys, setCategorys] = useState<Icategory[]>([]);
  const [isRead, setIsRead] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Icategory | null>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get(`/api/all-category`)
      .then((response) => {
        setCategorys(response.data);

        setTimeout(() => {
          setLoading(true);
        }, 200);
      })
      .catch((error) => {})
      .finally(() => {});
  }, []);

  const onCategory = async (category: Icategory) => {
    setSelectedCategory(category);
    setIsRead(true);
  };
  if (!userData) {
    navigate('/login');
  }
  return (
    <Layout user={userData}>
      <Container>
        {loading ? (
          !isEmpty(categorys) ? (
            <>
              <CategoryList categorys={categorys} onCategory={onCategory}>
                <DateInfoGroup>
                  <DateInfo>{defines.Text.categoryListTitle}</DateInfo>
                </DateInfoGroup>
              </CategoryList>

              {isRead ? (
                <>
                  <CategoryReadMemo
                    categorys={categorys}
                    setCategorys={setCategorys}
                    selectedCategory={selectedCategory}
                    setIsRead={setIsRead}
                  ></CategoryReadMemo>
                </>
              ) : null}
            </>
          ) : (
            <NoData text={defines.Nodata.categoryText}></NoData>
          )
        ) : (
          <Loading />
        )}
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  padding: 20px;
`;

export default CategoryEdit;
