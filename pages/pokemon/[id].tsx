import { useState } from "react";
import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { Layout } from "../../components/layouts";
import { PokemonListFull } from "../../interfaces";
import { Grid, Card, Text, Button, Container, Image } from "@nextui-org/react";
import { localFavorites } from "../../utils";
import confetti from "canvas-confetti";
import { getPokemonInfo } from "../../utils/getPokemonInfo";

interface Props {
  pokemon: PokemonListFull;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  const initialPokemon = pokemon.sprites.other;
  const [isInFavorites, setisInFavorites] = useState(
    localFavorites.existInFavorites(pokemon.id)
  );

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id);
    setisInFavorites(localFavorites.existInFavorites(pokemon.id));

    if (!isInFavorites) {
      confetti({
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: {
          x: 1,
          y: 0,
        },
      });
    }
  };
  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: "30px" }}>
            <Card.Body>
              <Card.Image
                src={
                  initialPokemon?.dream_world.front_default || "/no-image.png"
                }
                alt={pokemon.name}
                width="100%"
                height="200px"
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ justifyContent: "space-between", flexDirection: 'column' }}>
              <Text h1 transform="capitalize">
                {pokemon.name}
              </Text>
              <Button
                color="gradient"
                ghost={!isInFavorites}
                onPress={onToggleFavorite}
              >
                <Text>
                  {" "}
                  {isInFavorites ? "En Favoritos" : "Guardar en Favoritos"}
                </Text>
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites: </Text>
              <Container direction="row" display={"flex"} gap={0}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />

                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />

                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />

                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemon151 = [...Array(151)].map((value, index) => `${index + 1}`);

  return {
    paths: pokemon151.map((id) => ({
      params: { id },
    })),
    //fallback: false,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const pokemon = await getPokemonInfo(id);
  if (!pokemon) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      pokemon,
    },
    revalidate: 86400, // 60 * 60 * 24
  };
};

export default PokemonPage;
