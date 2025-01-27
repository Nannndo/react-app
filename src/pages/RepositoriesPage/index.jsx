import React from "react";
import Profile from "./Profiles/index";
import { Container, Sidebar, Main } from './styles'
import Repositories from "../Repositories";

import Filter from "./Profiles/Filter";

function RepositoriesPage() {

    const user = {
        login: "Nannndo",
        name: "Fernando Belo",
        avatar_url: "https://avatars.githubusercontent.com/u/126526426?v=4",
        followers: 0,
        following: 1,
        company: "iK",
        blog: "",
        location: "São Paulo, SP",
    }

    return (
        <Container>
            <Sidebar>
                <Profile user={user} />
                <Filter />
            </Sidebar>
            <Main>
                <Repositories />
            </Main>
        </Container>
    )
}

export default RepositoriesPage;