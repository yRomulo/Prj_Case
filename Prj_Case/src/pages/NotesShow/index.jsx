import React from 'react';
import { Container, Sidebar } from "./styles.js";
import { Content } from '../NoteCreation/styles.js';

export function NotesShow({ tarefas, editarTarefa }) {
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
          <li><h2>Estudar progrmação</h2></li>
          <li><h2>exemplo 2</h2></li>
        </ul>
      </Content>
    </Container>
  );
}
