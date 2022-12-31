import { Layout } from "../../components/layouts";
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Pokemon } from "../../interfaces";
import pokeApi from '../../api/pokeApi';
import { Button, Card, Container, Grid, Text } from "@nextui-org/react";
import Image from "next/image";
import { localStorageCode } from "../../utils";
import { useEffect, useState } from "react";

interface Props {
    pokemon: Pokemon
}
const pokemonPage: NextPage<Props> = ({ pokemon }) => {

    const [isInFavorites, setIsInFavorites] = useState(localStorageCode.isPokemonInFav(pokemon.id));

    const onToggleFavorite = () => {
        localStorageCode.toggleFavorite(pokemon.id);
        setIsInFavorites(!isInFavorites)
    }

    return (
        <Layout title={pokemon.name.toUpperCase()} favIcon={pokemon.sprites.front_default}>
            <Grid.Container css={{ marginTop: '5px' }} gap={2}>
                <Grid xs={12} sm={4}>
                    <Card isHoverable css={{ padding: '30px' }}>
                        <Card.Body>
                            <Card.Image src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'} alt={pokemon.name} width="100%" height={200} />
                        </Card.Body>
                    </Card>
                </Grid>
                <Grid xs={12} sm={8}>
                    <Card>
                        <Card.Header css={{ display: 'flex', justifyContent: "space-between" }}>
                            <Text h1 transform="capitalize">
                                {pokemon.name}
                            </Text>
                            <Button color="gradient" ghost={!isInFavorites} onClick={onToggleFavorite}>
                                {isInFavorites ? 'En favoritos' : 'Guardar en favoritos'}
                            </Button>
                        </Card.Header>
                        <Card.Body>
                            <Text size={30}>Sprites:</Text>
                            <Container direction="row" display="flex" gap={0}>
                                <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={200} height={200} />
                                <Image src={pokemon.sprites.back_default} alt={pokemon.name} width={200} height={200} />
                                <Image src={pokemon.sprites.front_shiny} alt={pokemon.name} width={200} height={200} />
                                <Image src={pokemon.sprites.back_shiny} alt={pokemon.name} width={200} height={200} />
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
        </Layout>

    )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const pokemon151 = [...Array(151)].map((value, index) => `${index + 1}`);

    return {
        paths: pokemon151.map(id => ({
            params: { id }
        })),
        fallback: false, // can also be true or 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { id } = params as { id: string }
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);


    return {
        props: {
            pokemon: data
        }
    }
}





export default pokemonPage;