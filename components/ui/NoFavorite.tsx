import { Container, Text, Image } from "@nextui-org/react";
import React from "react";

export const NoFavorite = () => {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 100px)",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
      }}
    >
      <Text h1>No hay favoritos</Text>
      <Image
        alt="noImage"
        css={{ opacity: 0.6 }}
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
      ></Image>
    </Container>
  );
};
