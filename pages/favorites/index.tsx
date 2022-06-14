import { useState, useEffect } from "react";
import { NextPage } from "next/types";
import { Layout } from "../../components/layouts";
import { NoFavorite } from "../../components/ui/NoFavorite";
import { localFavorites } from "../../utils";
import { Favorite } from "../../components/ui";

const Favorites: NextPage = () => {
  const [favoritePokemons, setfavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setfavoritePokemons(localFavorites.pokemons);
  }, []);

  return (
    <Layout>
      {favoritePokemons.length === 0 ? (
        <NoFavorite />
      ) : (
        <Favorite favoritePokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default Favorites;
