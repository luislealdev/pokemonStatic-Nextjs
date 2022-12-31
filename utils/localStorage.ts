const localFavorites = (id: number) => {
    let favPokemons: number[] = JSON.parse(localStorage.getItem("favPokemons") || '[]');

    if (favPokemons.includes(id)) {
        favPokemons = favPokemons.filter(pokeId => pokeId != id)
    } else {
        favPokemons.push(id);
    }

    localStorage.setItem("favPokemons", JSON.stringify(favPokemons));
}

export default {
    localFavorites
}