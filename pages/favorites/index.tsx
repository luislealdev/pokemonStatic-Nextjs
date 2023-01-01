import React from 'react'
import { NextPage } from 'next';
import { Layout } from '../../components/layouts/Layout';
import { NoFavorites } from '../../components/ui/NoFavorites';
import { useState, useEffect } from 'react';
import { localStorageCode } from '../../utils';
import { FavoritesPokemons } from '../../components/pokemon';

const favoritesPage: NextPage = () => {
    const [pokemons, setPokemons] = useState<number[]>([]);
    useEffect(() => {
        setPokemons(localStorageCode.pokemons);
    }, [])

    return (
        <Layout title='FavPokemons' favIcon=''>
            {pokemons.length == 0
                ? (<NoFavorites />)
                : (<FavoritesPokemons pokemons={pokemons} />)}
        </Layout>

    )
}

export default favoritesPage;