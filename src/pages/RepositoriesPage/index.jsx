import React from "react";
import Profile from "./Profiles/index";
import { Container, Sidebar, Main } from './styles'

import Filter from "./Profiles/Filter";

function RepositoriesPage() {
    return (
        <Container>
            <Sidebar> 
                <Profile />
                <Filter/>
                </Sidebar>
            <Main>Main</Main>
        </Container>
    )
}

export default RepositoriesPage;