import { Button } from "@nextui-org/react"
import { NextPage } from "next"
import { Layout } from "../components/layouts"

const HomePage: NextPage = () => {
  return (
    <Layout title={"Luis"}>
      <Button color="gradient">
        Hola Mundo
      </Button>
    </Layout>
  )
}

export default HomePage;