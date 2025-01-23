import { Image } from "react-native";
import { Container, Header } from "./styles";

import logoImg from "@assets/Logo.png"
import profileImg from "@assets/Ellipse.png"

export function Home() {
    return (
        <Container>
            <Header>
                <Image source={logoImg} />
                <Image source={profileImg} />
            </Header>
        </Container>
    );
}