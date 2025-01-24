import React from "react";

import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md'
import { Container, Header, Avatar, Login, Name, Inner, Data } from './styles'

function Profile() {
    return (
        <Container>
            <Header>
                <Avatar src="https://avatars.githubusercontent.com/u/126526426?v=4" />
                <Login>Nannndo</Login>
                <Name>Fernando Belo</Name>
            </Header>
            <Inner>
                <Data>
                    <MdGroup size={20} />
                    30&nbsp;<i>seguidores</i>&nbsp;&middot;&nbsp;10&nbsp;<i> seguindo</i>
                </Data>
                <Data><MdWork size={20} /> IK</Data>
                <Data><MdLocationCity size={20} /> São Paulo, SP</Data>
                <Data><MdLink size={20} /><a color="#FFFFFF" href="https://www.instagram.com/Nannnd0/">Instagram</a></Data>
            </Inner>
        </Container>
    )
}

export default Profile;