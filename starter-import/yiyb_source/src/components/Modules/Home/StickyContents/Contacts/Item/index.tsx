import { css } from 'styled-components';
import useStyledTheme from '@/hooks/theme/useStyledTheme';
import { SNSInfo } from '@/libs/models/sns';
import Flex from '@/components/Common/Flex';
import Text from '@/components/Common/Text';
import HyperLink from '@/components/Common/HyperLink';

type ContactsItemProps = SNSInfo & {};

const ContactsItem = ({
  link,
  platform,
  icon: Icon,
}: ContactsItemProps): JSX.Element => {
  const { color, fontSize, fontFamily } = useStyledTheme();

  return (
    <HyperLink
      external
      anchor={{
        href: link,
        target: '_blank',
      }}
      padding='1rem 1.5rem'
      borderRadius='5px'
      color={color.contrast}
      backgroundColor={color.background3}
      hover={css`
        transition: all 0.15s ease-in-out;
        color: ${color.white};
        background-color: ${color.main};
      `}
    >
      <Flex
        tagName='div'
        gap='0.75rem'
        alignItems='flex-end'
      >
        <Icon fontSize={fontSize.EXTRA_BIG} />

        <Text
          tagName='span'
          fontSize={fontSize.NORMAL}
          fontFamily={fontFamily.pretendard.MEDIUM}
        >
          {platform}
        </Text>
      </Flex>
    </HyperLink>
  );
};

export default ContactsItem;
