import React from 'react';
import { Container } from "./styles.js";

export function NotesShow({ tarefas, editarTarefa }) {
  const handleEditar = (index) => {
    const novaDescricao = prompt("Digite a nova descrição:");
    if (novaDescricao !== null) {
      editarTarefa(index, novaDescricao);
    }
  };
  return (
    <Container>
      <h1>Amostra de Notas</h1>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>
            <strong>{tarefa.titulo}</strong>: {tarefa.descricao} (
            {tarefa.prioridade})
            <button onClick={() => handleEditar(index)}>
              Editar Descrição
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
}
