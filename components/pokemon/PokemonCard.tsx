import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { SmallPokemon } from "../../interfaces";

interface Props {
  pokemon: SmallPokemon;
  id: string;
}
export const PokemonCard: FC<Props> = ({ pokemon, id }) => {
  const router = useRouter();
  const onClick = () => {
    router.push(`/name/${pokemon.name}`);
  };
  return (
    <Grid
      xs={6}
      sm={3}
      md={2}
      xl={1}
      key={pokemon.name}
      css={{ margin: "15px" }}
    >
      <Card isHoverable isPressable onPress={onClick}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={pokemon.img} width="100%" height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{pokemon.name}</Text>
            <Text>#{pokemon.id + 1}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
