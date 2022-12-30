import { Text } from "@nextui-org/react"
import { NextPage } from "next"
import { Layout } from "../components/layouts"

interface Props {
  pokemons: smallPokemon[]
}
const HomePage: NextPage<Props> = ({ pokemons }) => {

  console.log({ pokemons });


  return (
    <Layout title={"Luis"}>
      <ul>
        {
          pokemons.map((poke: smallPokemon) => {
            return <li>
              <Text>{poke.id}. {poke.name.toLocaleUpperCase()}</Text>
              <Image src={poke.img} alt={poke.name} width={50} height={50} />
            </li>
          })
        }
      </ul>
    </Layout>
  )
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
import { GetStaticProps } from 'next'
import { pokeApi } from "../api";
import { pokemonsList, smallPokemon } from "../interfaces";
import Image from "next/image"

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<pokemonsList>("/pokemon?limit=151&offset=0");

  const pokemons: smallPokemon[] = data.results.map((pokemon, i) => ({
    ...pokemon,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }))

  // data.results.map(pokemon=>{
  //   pokemon.img = 
  // })

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage;