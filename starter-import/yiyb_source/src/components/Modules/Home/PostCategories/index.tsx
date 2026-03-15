import styled, { css } from 'styled-components';
import { FlexDirection, WhiteSpace } from '@/types/style';
import Flex from '@/components/Common/Flex';
import PostCategoryItem from './Item';

type PostCategoriesProps = {
  flexDirection: FlexDirection;
  whiteSpace: WhiteSpace;
  selectCategory: string;
  categories: string[];
};

const PostCategories = ({
  flexDirection,
  whiteSpace,
  selectCategory,
  categories,
}: PostCategoriesProps) => {
  return (
    <CategoriesWrapper
      tagName='ul'
      gap='1rem'
      flexDirection={flexDirection}
      padding='0 1rem 1rem 0'
      maxHeight='365px'
      overflow='auto'
    >
      {categories.map((category) => (
        <PostCategoryItem
          key={category}
          category={category}
          selected={category === selectCategory}
          whiteSpace={whiteSpace}
        />
      ))}
    </CategoriesWrapper>
  );
};

const CategoriesWrapper = styled(Flex<'ul'>)`
  &::-webkit-scrollbar {
    width: 5px;
    height: 3px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.background3};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.main};
  }
`;

export default PostCategories;
