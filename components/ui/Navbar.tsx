import { useTheme, Text, Spacer, Image } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <Link href="/">
      <span
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "start",
          padding: "0px 20px",
          backgroundColor: theme?.colors.gray300.value,
          cursor: 'pointer'
        }}
      >
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
          alt="icono de app"
          height={70}
          width={70}
        />
        <Text color="white" h2>
          {" "}
          P
        </Text>
        <Text color="white" h3>
          {" "}
          okemon
        </Text>
        <Spacer css={{ flex: 1 }} />
        <Link href="/favorites">
          <a>
            {" "}
            <Text color="white" h3>
              {" "}
              Favoritos
            </Text>
          </a>
        </Link>
      </span>
    </Link>
  );
};
