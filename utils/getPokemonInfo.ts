import pokeApi from "../api/pokeApi";
import { PokemonListFull } from "../interfaces";
export const getPokemonInfo = async (nameOrId: string) => {
  const { data } = await pokeApi.get<PokemonListFull>(`/pokemon/${nameOrId}`);
  return {
    id: data.id,
    sprites: data.sprites,
    name: data.name,
  };
};
