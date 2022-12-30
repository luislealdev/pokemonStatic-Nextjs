import { Text } from "@nextui-org/react"
import { NextPage } from "next"
import { Layout } from "../components/layouts"

const HomePage: NextPage = (props) => {
  console.log(props);

  return (
    <Layout title={"Luis"}>
      <Text>Pokemon 1</Text>
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

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get("/pokemon?limit=151&offset=0");

  return {
    props: {
      pokemons: data.results
    }
  }
}

export default HomePage;