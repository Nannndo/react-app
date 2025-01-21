import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
// import { MdSearch } from "react-icons/md";
import { Container, Logo, Title, Form, Input, Button } from "./styles";

import gitHubLogo from '../../assets/images/github-logo.svg'

function MainPage() {
  const [login, setLogin] = useState('');
  return (
    <Container>
      <Logo src={gitHubLogo} alt="API Github" />
      <Title> API Github</Title>
      <Form>
        <Input placeholder="usuário" value={login} onChange={(event) => setLogin(event.target.value)} />
        <Button to={`/${login}/repositories`}>
          <IoMdSearch size={42} />
        </Button>
      </Form>
    </Container>
  );
}

export default MainPage;