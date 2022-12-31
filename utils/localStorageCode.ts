const toggleFavorite = (id: number) => {
    let favPokemons: number[] = JSON.parse(localStorage.getItem("favPokemons") || '[]');

    if (favPokemons.includes(id)) {
        favPokemons = favPokemons.filter(pokeId => pokeId != id)
    } else {
        favPokemons.push(id);
    }

    localStorage.setItem("favPokemons", JSON.stringify(favPokemons));
};

const isPokemonInFav = (id: number): boolean => {

    if (typeof window == 'undefined') return false;

    const favPokemons: number[] = JSON.parse(localStorage.getItem("favPokemons") || '[]');

    return favPokemons.includes(id);
};

const pokemons = (): number[] => {
    return JSON.parse(localStorage.getItem("favPokemons") || '[]');
}


export default {
    toggleFavorite,
    isPokemonInFav,
    pokemons
}