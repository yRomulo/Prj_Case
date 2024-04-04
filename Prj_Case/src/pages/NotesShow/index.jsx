import React from 'react';
import { Container, Sidebar, Content } from "./styles.js";


export function NotesShow() {
  return (
    <Container>
      <Sidebar>
        <input type="search" name="Procurar" id="" placeholder='Procurar'/>
        <ul>
          <li> <span>3</span> <p>pendentes</p></li>
          <li> <span>4</span> <p>concluidas</p></li>
          <li> <span>2</span> <p>urgente</p></li>
          <li> <span>2</span> <p>importantes</p></li>
          <li> <span>3</span> <p>normal</p></li>
          <li> <span>7</span> <p>todas</p></li>
        </ul>
      </Sidebar>
      <Content>
        <h1>amostragem</h1>
        <ul>
          <li>
            <div>
              <input type="checkbox" name="" id="" /><h2>Estudar progrmação</h2>
              
              <button>importante</button>
              <button>pendente</button>
            </div>
            <p>Lorem ipsum dolor molestias velit iure eaque veniam fuga quo voluptatem?</p>
            <footer>
              <button type="submit" placeholder="editar"></button>
              <button type="submit" placeholder="salvar"></button>
            </footer>
          </li>
          <li><input type="checkbox" name="" id="" /><h2>exemplo 2</h2></li>
        </ul>
      </Content>
    </Container>
  );
}
