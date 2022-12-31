import { Spacer, Text, useTheme, Link } from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link";

export const Navbar = () => {

    const { theme } = useTheme();

    return (
        <nav style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "start",
            padding: "0 20px",
            backgroundColor: theme?.colors.gray50.value
        }}>

            <NextLink href='/' passHref>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                alt="Pokemon logo"
                width={70}
                height={70}
            />
                    <Text color="white" h2>P</Text>
                    <Text color="white" h3>okémon</Text>
                </div>
            </NextLink>


            <Spacer css={{ flex: 1 }} />

            <NextLink href='/favorites' passHref>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Text color="white">Favoritos</Text>
                </div>
            </NextLink>




        </nav>
    )
}
