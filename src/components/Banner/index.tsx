import { Flex, Image, Text } from '@chakra-ui/react';

export function Banner(): JSX.Element {
  return (
    <Flex
      align="center"
      w="100%"
      h={['10rem', '15.6rem', '15.6rem', '20.9rem']}
      bgImage="url('./Banner.png')"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        justify={['center', 'space-between']}
        align="center"
        color="white"
        w="100%"
        mx="auto"
        px={['4', '10', '15', '20', '36']}
      >
        <div>
          <Text
            fontSize={['1.25rem', '1.25rem', '1.25rem', '2.25rem']}
            fontWeight="500"
          >
            5 Continentes,
            <br /> infinitas possibilidades.
          </Text>
          <Text
            fontSize={['0.8rem', '0.8rem', '0.8rem', '1.25rem']}
            color="gray.200"
            w={['20rem', '20rem', '32.75rem']}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </div>
        <Image
          src="./Airplane.svg"
          alt="Airplane"
          ml="3"
          w={['200px', '200px', '200px', '405px', '430px']}
          display={['none', 'none', 'block']}
          transform={['translateY(68px)', 'translateY(53px)']}
        />
      </Flex>
    </Flex>
  );
}
