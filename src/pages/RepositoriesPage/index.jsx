import React, { useState, useEffect } from "react";

import { useParams } from 'react-router-dom';
import Profile from "./Profiles/index";
import { Loading, Container, Sidebar, Main } from './styles';
import Repositories from "../Repositories";
import { getUser, getLangsFrom, getRepos } from "../../services/api";
import Filter from "./Profiles/Filter";

function RepositoriesPage() {

    const { login } = useParams();
    const [user, setUser] = useState();
    const [repositories, setRepositories] = useState();
    const [languages, setLanguages] = useState();
    const [currentLanguage, setCurrentLanguage] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            const [userResponse, repositoriesResponse] = await Promise.all([
                getUser(login),
                getRepos(login)
            ]);
            setUser(userResponse.data);
            setRepositories(repositoriesResponse.data);
            setLanguages(getLangsFrom(repositoriesResponse.data));
            setLoading(false);
        };
        loadData();
    }, []);

    const onFilterClick = (language) => {
        setCurrentLanguage(language);
    };

    if (loading) {
        return <Loading>Carregando...</Loading>;
    }

    return (
        <Container>
            <Sidebar>
                {user ? <Profile user={user} /> : <p>Perfil não encontrado</p>}
                <Filter languages={languages} currentLanguage={currentLanguage} onClick={onFilterClick} />
            </Sidebar>
            <Main>
                <Repositories repositories={repositories} currentLanguage={currentLanguage} />
            </Main>
        </Container>
    );
}

export default RepositoriesPage;