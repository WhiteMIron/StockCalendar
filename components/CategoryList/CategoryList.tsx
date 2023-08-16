import React, { ReactNode } from 'react';

import { CategoryListContainer } from './styles';
import { Icategory } from '@typings/category';
import uuid from 'react-uuid';
import CategoryItem from './CategoryItem';

interface CategoryListProps {
  categorys: Icategory[];
  onCategory: (category: Icategory) => void;
  children: ReactNode;
}

const CategoryList = ({ children, categorys, onCategory }: CategoryListProps) => {
  return (
    <CategoryListContainer>
      {children}
      <ul style={{ marginTop: '5px' }}>
        {categorys.map((category: Icategory) => (
          <CategoryItem
            category={category}
            key={uuid()}
            onCategory={() => {
              onCategory(category);
            }}
          ></CategoryItem>
        ))}
      </ul>
    </CategoryListContainer>
  );
};

export default CategoryList;
