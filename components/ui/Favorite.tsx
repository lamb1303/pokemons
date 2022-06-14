import { Card, Grid } from "@nextui-org/react";
import React from "react";
import { NextPage } from "next/types";
import { FavoritePokemon } from "../pokemon";

interface Props {
  favoritePokemons: number[];
}

export const Favorite: NextPage<Props> = ({ favoritePokemons }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {favoritePokemons.map((favorite, index: number) => (
        <FavoritePokemon key={index} pokemonId={favorite} />
      ))}
    </Grid.Container>
  );
};
