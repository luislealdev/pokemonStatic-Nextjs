import { smallPokemon } from '../../interfaces';
import { FC } from 'react';
import { Card, Grid, Row, Text } from "@nextui-org/react"
import { useRouter } from 'next/router';

interface Props {
    pokemon: smallPokemon
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {

    const router = useRouter();

    const onClick = () => {
        router.push(`/name/${pokemon.name}`);
    }

    return (
        <Grid xs={6} sm={3} key={pokemon.id}>
            <Card
                isHoverable
                isPressable
                onPress={onClick}>
                <Card.Body css={{ p: 0 }}>
                    <Card.Image
                        src={pokemon.img}
                        objectFit="cover"
                        height={140}
                        alt={pokemon.name}
                    />
                </Card.Body>
                <Card.Footer css={{ justifyItems: "flex-start" }}>
                    <Row wrap="wrap" justify="space-between" align="center">
                        <Text b transform="uppercase">{pokemon.name}</Text>
                        <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                            #{pokemon.id}
                        </Text>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
    )
}
