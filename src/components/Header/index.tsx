import { Flex, Image } from '@chakra-ui/react';

export function Header(): JSX.Element {
  return (
    <Flex align="center" justify="center" w="100%" h="6.25rem" border="1px">
      <Image src="./Logo.svg" alt="logo" />
    </Flex>
  );
}
