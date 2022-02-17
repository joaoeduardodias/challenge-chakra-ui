import { Grid, GridItem, useBreakpointValue } from '@chakra-ui/react';
import { TravelType } from './TravelType';

export function TravelTypes(): JSX.Element {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true,
  });
  return (
    <Grid
      templateColumns={['1fr 1fr', '1fr 1fr ', '1fr 1fr', 'repeat(5, 1fr)']}
      maxW="1160px"
      mx="auto"
      mt={['10', '32']}
      gap={[1, 5]}
    >
      <GridItem pl={['2rem', '2rem', 0]}>
        <TravelType icon="cocktail" text="vida noturna" />
      </GridItem>
      <GridItem pl={['2rem', '2rem', 0]}>
        <TravelType icon="surf" text="praia" />
      </GridItem>
      <GridItem pl={['2rem', '2rem', 0]}>
        <TravelType icon="building" text="moderno" />
      </GridItem>
      <GridItem pl={['2rem', '2rem', 0]}>
        <TravelType icon="museum" text="clássico" />
      </GridItem>
      {isMobile ? (
        <GridItem colSpan={[2, 2, 2, 1]}>
          <TravelType icon="earth" text="e mais..." />
        </GridItem>
      ) : (
        <GridItem colSpan={[2, 2, 2, 1]} mx="auto">
          <TravelType icon="earth" text="e mais..." />
        </GridItem>
      )}
    </Grid>
  );
}
