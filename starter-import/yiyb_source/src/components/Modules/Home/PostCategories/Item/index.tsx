import styled, { css } from 'styled-components';
import useStyledTheme from '@/hooks/theme/useStyledTheme';
import { WhiteSpace } from '@/types/style';
import Text from '@/components/Common/Text';
import HyperLink from '@/components/Common/HyperLink';

type PostCategoryItemProps = {
  category: string;
  selected: boolean;
  whiteSpace: WhiteSpace;
};

const PostCategoryItem = ({
  category,
  selected,
  whiteSpace,
}: PostCategoryItemProps): JSX.Element => {
  const { color, fontSize, fontFamily } = useStyledTheme();

  return (
    <CategoryItemWrapper key={category}>
      <HyperLink
        external={false}
        link={{
          href: {
            query:
              category === '전체'
                ? {}
                : {
                    category,
                  },
          },
        }}
        display='block'
        padding='1rem 1.75rem'
        borderRadius='5px'
        whiteSpace={whiteSpace}
        color={selected ? color.white : color.contrast}
        backgroundColor={selected ? color.main : color.background3}
        hover={css`
          transition: all 0.15s ease-in-out;
          color: ${color.white};
          background-color: ${color.main};
        `}
      >
        <Text
          tagName='span'
          fontSize={fontSize.NORMAL}
          fontFamily={fontFamily.pretendard.MEDIUM}
        >
          {category}
        </Text>
      </HyperLink>
    </CategoryItemWrapper>
  );
};

const CategoryItemWrapper = styled.li`
  list-style: none;
`;

export default PostCategoryItem;
