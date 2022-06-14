import Head from "next/head";
import { FC } from "react";
import { Navbar } from '../ui';

type Props = {
  children: React.ReactNode;
  title?: string;
};

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Luis Medina" />
        <meta name="description" content="Informacion sobre pokemon" />
      </Head>
      <Navbar/>
      <main style={{padding: '0px 20px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>{children}</main>
    </>
  );
};
