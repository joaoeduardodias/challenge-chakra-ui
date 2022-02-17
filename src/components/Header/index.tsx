import { Flex, Image, SimpleGrid } from '@chakra-ui/react';

export function Header(): JSX.Element {
  return (
    <Flex
      as="header"
      align="center"
      justify="center"
      w="100%"
      h={['3.125rem', '6.25rem']}
    >
      <SimpleGrid
        h="100%"
        mx="auto"
        maxW="1160px"
        alignItems="center"
        justifyContent="center"
        gridTemplateColumns="repeat(3,1fr)"
      >
        <Image
          src="./Logo.svg"
          alt="logo"
          gridColumn={2}
          justifySelf="center"
          w={['81px', '184px']}
        />
      </SimpleGrid>
    </Flex>
  );
}
