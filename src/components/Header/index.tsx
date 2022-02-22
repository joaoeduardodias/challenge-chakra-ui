import { Flex, Icon, Image, SimpleGrid } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RiArrowLeftSLine } from 'react-icons/ri';

export function Header(): JSX.Element {
  const { asPath } = useRouter();
  const notHomePage = asPath !== '/';

  return (
    <Flex
      as="header"
      align="center"
      justify="center"
      w="100%"
      px="1rem"
      mx="auto"
      h={['3.125rem', '6.25rem']}
    >
      <SimpleGrid
        w="100%"
        h="100%"
        mx="auto"
        maxW="1160px"
        alignItems="center"
        justifyContent="center"
        gridTemplateColumns="repeat(3,1fr)"
      >
        {notHomePage && (
          <Link href="/">
            <a>
              <Icon
                as={RiArrowLeftSLine}
                fontSize={[20, 40]}
                justifySelf="start"
              />
            </a>
          </Link>
        )}
        <Image
          src="/Logo.svg"
          alt="logo"
          gridColumn="2"
          justifySelf="center"
          w={['81px', '184px']}
        />
      </SimpleGrid>
    </Flex>
  );
}
