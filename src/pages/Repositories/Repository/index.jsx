import React from "react";

import { Container, Name, Description, Footer, Lang, Link } from "./styles";


function Repository() {
    return (
        <Container>
            <Name> Repository Name</Name>
            <Description>Repository Description</Description>
            <Footer color="#f37272">
                <Lang>Repository Lang</Lang>
                <Link href="https://github.com/Nannndo" target="_blank"> VER</Link>
            </Footer>
        </Container>
    );
}

export default Repository;