import useStyledTheme from '@/hooks/theme/useStyledTheme';
import { snsList } from '@/libs/models/sns';
import Flex from '@/components/Common/Flex';
import Section from '@/components/Common/Section';
import Text from '@/components/Common/Text';
import ContactsItem from './Item';

const Contacts = (): JSX.Element => {
  const { fontSize } = useStyledTheme();

  return (
    <Section
      tagName='div'
      flex='1'
    >
      <Text
        tagName='h2'
        fontSize={fontSize.MEDIUM}
        margin='0 0 1.25rem 0'
      >
        📩 Contacts
      </Text>

      <Section tagName='div'>
        <Flex
          tagName='ul'
          gap='1rem'
          flexDirection='column'
        >
          {snsList.map((sns) => (
            <ContactsItem
              key={sns.platform}
              {...sns}
            />
          ))}
        </Flex>
      </Section>
    </Section>
  );
};

export default Contacts;
