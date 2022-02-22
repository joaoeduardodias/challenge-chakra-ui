import {
  Popover,
  PopoverTrigger,
  Icon,
  Flex,
  Text,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
} from '@chakra-ui/react';
import { RiInformationLine } from 'react-icons/ri';

export function ContinentInfo(): JSX.Element {
  return (
    <Flex
      direction={['column', 'column', 'column', 'row']}
      maxW="1160px"
      w="90%"
      mx="auto"
      justify={['center', 'center', 'space-between']}
      mt={['1.5rem', '1.5rem', '5rem']}
    >
      <Text
        maxW={['100%', '100%', '37.5rem']}
        mx={['auto', 'auto', 'auto', '0']}
        pr={['0', '0', '0', '2rem']}
        textAlign="justify"
        fontSize={['lg', 'xl', 'xl', '2xl']}
        color="teal.700"
      >
        A Europa é, por convenção, um dos seis continentes do mundo.
        Compreendendo a península ocidental da Eurásia, a Europa geralmente
        divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
        rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
      </Text>
      <Flex
        as="section"
        maxW={['25rem', '28rem']}
        w="90%"
        mx={['auto', 'auto', 'auto', '0']}
        align="center"
        justify="space-between"
        mt={['1rem', '1rem', '1rem', '0']}
      >
        <Flex
          direction="column"
          align={['flex-start', 'flex-start', 'center']}
          justify="center"
        >
          <Text
            as="strong"
            color="yellow.600"
            fontSize={['2xl', '5xl']}
            fontWeight="600"
          >
            50
          </Text>
          <Text as="span">países</Text>
        </Flex>

        <Flex
          direction="column"
          align={['flex-start', 'flex-start', 'center']}
          justify="center"
        >
          <Text
            as="strong"
            color="yellow.600"
            fontSize={['2xl', '5xl']}
            fontWeight="600"
          >
            60
          </Text>
          <Text as="span">línguas</Text>
        </Flex>
        <Flex
          direction="column"
          align={['flex-start', 'flex-start', 'center']}
          justify="center"
        >
          <Text
            as="strong"
            color="yellow.600"
            fontSize={['2xl', '5xl']}
            fontWeight="600"
          >
            24
          </Text>
          <Text as="span" align="center">
            cidades +100
            <Popover>
              <PopoverTrigger>
                <span>
                  <Icon
                    cursor="pointer"
                    as={RiInformationLine}
                    ml="1"
                    color="gray.400"
                    w={['10px', '16px']}
                    h={['10px', '16px']}
                  />
                </span>
              </PopoverTrigger>
              <PopoverContent bg="gray.700" color="yellow.400">
                <PopoverArrow bg="gray.700" />
                <PopoverCloseButton />
                <PopoverBody fontWeight="400" fontSize="lg">
                  Paris, europa, chile, brasil, china
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
