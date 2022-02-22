import { Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

interface TravelTypeProps {
  icon: string;
  text: string;
}

export function TravelType({ icon, text }: TravelTypeProps): JSX.Element {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true,
  });
  return (
    <Flex
      direction={['row', 'column']}
      align="center"
      justify={['initial', 'initial', 'initial', 'center']}
    >
      {isMobile ? (
        <Image
          src={`/icons/${icon}.svg`}
          w={['4.5rem', '4.5rem', '5.32rem']}
          h={['4.5rem', '4.5rem', '5.32rem']}
          mb="1.5rem"
        />
      ) : (
        <Text fontSize="4xl" mr="2" color="yellow.400">
          •
        </Text>
      )}
      <Text
        fontWeight={['500', '500', '600']}
        fontSize={['1.125rem', '1.125rem', '1.5rem']}
        color="teal.700"
      >
        {text}
      </Text>
    </Flex>
  );
}
