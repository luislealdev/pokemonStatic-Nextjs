import React from 'react'
import { NextPage } from 'next';
import { Layout } from '../../components/layouts/Layout';
import { NoFavorites } from '../../components/ui/NoFavorites';
import { useState, useEffect } from 'react';
import { localStorageCode } from '../../utils';
import { Card, Grid } from '@nextui-org/react';

const favoritesPage: NextPage = () => {
    const [pokemons, setPokemons] = useState<number[]>([]);
    useEffect(() => {
        setPokemons(localStorageCode.pokemons);
    }, [])

    return (
        <Layout title='FavPokemons' favIcon=''>
            {pokemons.length == 0
                ? (<NoFavorites />)
                : (<Grid.Container gap={2} direction='row' justify='flex-start'>
                    {pokemons.map(id => (
                        <Grid xs={6} sm={3} md={2} xl={1} key={id}>
                            <Card isHoverable css={{ padding: 10 }}>
                                <Card.Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} width='100%' height={140}/>
                            </Card>
                        </Grid>
                    ))}
                </Grid.Container>)}
        </Layout>

    )
}

export default favoritesPage;