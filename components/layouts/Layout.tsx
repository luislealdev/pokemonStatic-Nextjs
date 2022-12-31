import { FC } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui/Navbar';

interface Props {
  children?: JSX.Element,
  title: string,
  favIcon: string
};

export const Layout: FC<Props> = ({ children, title, favIcon }) => {
  return (
    <>
      <Head>
        <title>
          {title + " PokeApp" || 'PokemonApp'}
        </title>
        <link rel="icon" href={favIcon} type="image/x-icon" />
        <meta name='author' content='Luis Leal' />
        <meta name='description' content={`Información sobre el pokémon ${title}`} />
        <meta name='keywords' content={`${title}, pokemon, pokedex`} />
      </Head>

      <Navbar />

      <main style={{ padding: '0 20px' }}>
        {children}
      </main>

    </>
  )
}
