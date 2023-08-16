import moment from 'moment';
import React, { useEffect } from 'react';
import { CategoryItemContainer, CategoryTitle } from './styles';
import { Icategory } from '@typings/category';
import crown from '@images/crown.png';

interface CategoryItemProps {
  category: Icategory;
  onCategory: (category: Icategory) => void;
}

const StockItem = ({ category, onCategory }: CategoryItemProps) => {
  return (
    <CategoryItemContainer
      key={category.id}
      onClick={() => {
        onCategory(category);
      }}
    >
      <CategoryTitle>{category.name}</CategoryTitle>
    </CategoryItemContainer>
  );
};

export default StockItem;
