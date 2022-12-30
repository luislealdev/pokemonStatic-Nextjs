import { useRouter } from "next/router"
import { Layout } from "../../components/layouts";

const pokemonPage = () => {
    const router = useRouter();
    console.log(router.query);

    return (
        <Layout title="Algun pokemon">
            <div>Hola Mundo</div>
        </Layout>

    )
}

export default pokemonPage;