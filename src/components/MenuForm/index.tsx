import React from "react";

import { Container, Navigation, DropboxLogo, Form } from "./styles";

const MenuForm: React.FC = () => {
  return (
    <Container>
      <Navigation>
        <h1>
          <DropboxLogo />
          <span>Dropbox</span>
        </h1>
        <button className="action--close" onClick={window.toggleActiveMenu}>
          ✕
        </button>
      </Navigation>

      <Form>
        <span className="title">Resgistre</span>
        <span className="subtitle">preencha o formulário abaixo</span>

        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Sobrenome" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="senha" />

        <button>Prosseguir</button>

        <span className="terms">
          Esta página está sujeita à Política de privacidade e aos Termos de
          serviço.
        </span>
      </Form>
    </Container>
  );
};

export default MenuForm;
