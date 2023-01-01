import { FC } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui/Navbar';

interface Props {
  children?: JSX.Element,
  title: string,
  favIcon: string
};

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

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
        {/*METATAGS*/}
        <meta property="og:title" content={`${title}`} />
        <meta property="og:description" content={`Información sobre ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar />

      <main style={{ padding: '0 20px' }}>
        {children}
      </main>

    </>
  )
}
