import React from "react";
import Profile from "./Profiles/index";
import { Container, Sidebar, Main } from './styles'
import Repositories from "../Repositories";

import Filter from "./Profiles/Filter";

function RepositoriesPage() {
    return (
        <Container>
            <Sidebar>
                <Profile />
                <Filter />
            </Sidebar>
            <Main>
                <Repositories />
            </Main>
        </Container>
    )
}

export default RepositoriesPage;