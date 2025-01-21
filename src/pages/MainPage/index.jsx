import React from "react";
import { IoMdSearch } from "react-icons/io";
// import { MdSearch } from "react-icons/md";
import { Container, Logo, Title, Form, Input, Button } from "./styles";




import gitHubLogo from '../../assets/images/github-logo.svg'

export default function MainPage() {
  return (
    <Container>
      <Logo src={gitHubLogo} alt="API Github" />
      <Title> API Github</Title>
      <Form>
        <Input placeholder="usuário" />
        <Button>
          <IoMdSearch size={42} />
        </Button>
      </Form>
    </Container>
  );
}
