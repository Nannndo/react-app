import React, { useState } from "react";
import Profile from "./Profiles/index";
import { Container, Sidebar, Main } from './styles'
import Repositories from "../Repositories";
import { getLangsFrom } from "../../services/api";
import Filter from "./Profiles/Filter";


function RepositoriesPage() {

    const [currentLanguage, setCurrentLanguage] = useState();

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

    const repositories = [
        {
            id: 1,
            name: 'Repo 1',
            description: 'Descrição',
            html_url: 'https://github.com/Nannndo',
            language: 'JavaScript'
        },
        {
            id: 2,
            name: 'Repo 2',
            description: 'Descrição 2',
            html_url: 'https://github.com/Nannndo',
            language: 'NodeJS'
        },
        {
            id: 3,
            name: 'Repo 3',
            description: 'Descrição 3',
            html_url: 'https://github.com/Nannndo',
            language: 'React'
        },
        {
            id: 4,
            name: 'Repo 4',
            description: 'Descrição 4',
            html_url: 'https://github.com/Nannndo',
            language: 'Java'
        },
        {
            id: 5,
            name: 'Repo 5',
            description: 'Descrição 5',
            html_url: 'https://github.com/Nannndo',
            language: 'TypeScript'
        },
        {
            id: 6,
            name: 'Repo 6',
            description: 'Descrição 6',
            html_url: 'https://github.com/Nannndo',
            language: 'JavaScript'
        },
    ];

    const onFilterClick = (language) => {
        setCurrentLanguage(language);
    }
    const languages = getLangsFrom(repositories)
    return (
        <Container>
            <Sidebar>
                <Profile user={user} />
                <Filter languages={languages} currentLanguage={currentLanguage} onClick={onFilterClick} />
            </Sidebar>
            <Main>
                <Repositories repositories={repositories} currentLanguage={currentLanguage} />
            </Main>
        </Container>
    )
}

export default RepositoriesPage;