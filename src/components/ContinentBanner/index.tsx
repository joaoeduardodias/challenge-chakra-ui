import { Flex, Heading } from '@chakra-ui/react';

export function ContinentBanner(): JSX.Element {
  return (
    <Flex
      w="100%"
      h={['150px', '300px', '500px']}
      px={['0', '0', '36']}
      pt={['0', '0', '72']}
      bgImage="url('/continent.png')"
      bgPosition="bottom"
      bgRepeat="no-repeat"
      bgSize="cover"
      align="center"
      justify={['center', 'center', 'flex-start']}
    >
      <Heading
        color="white"
        fontWeight="600"
        fontSize={['1.75rem', '2rem', '3rem']}
        textAlign={['center', 'left']}
      >
        Europa
      </Heading>
    </Flex>
  );
}
