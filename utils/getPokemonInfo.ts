import pokeApi from '../api/pokeApi';
import { Pokemon } from '../interfaces/full-pokemon';
const getPokemonInfo = async (id_or_name: string) => {

    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id_or_name}`);

    return {
        id: data.id,
        name: data.name,
        sprites: data.sprites
    }
}

export default getPokemonInfo