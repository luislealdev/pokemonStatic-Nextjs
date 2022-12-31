import React from 'react'
import { NextPage } from 'next';
import { Layout } from '../../components/layouts/Layout';
import { NoFavorites } from '../../components/ui/NoFavorites';
import { useState, useEffect } from 'react';
import { localStorageCode } from '../../utils';

const favoritesPage: NextPage = () => {
    const [pokemons, setPokemons] = useState<number[]>([]);
    useEffect(() => {
        setPokemons(localStorageCode.pokemons);
    }, [])

    return (
        <Layout title='FavPokemons' favIcon=''>
            <NoFavorites />
        </Layout>

    )
}

export default favoritesPage;