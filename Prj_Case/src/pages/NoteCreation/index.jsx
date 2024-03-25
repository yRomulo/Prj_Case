import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Sidebar, Content } from "./styles";

export function NoteCreation({ noteCreation }) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [prioridade, setPrioridade] = useState("");

  const handleChangeTitulo = (event) => {
    setTitulo(event.target.value);
  };

  const handleChangeDescricao = (event) => {
    setDescricao(event.target.value);
  };

  const handleChangePrioridade = (event) => {
    setPrioridade(event.target.value);
  };

  const handleCadastrar = () => {
    if (!titulo || !descricao || !prioridade) return;
    adicionarTarefa({ titulo, descricao, prioridade });
    setTitulo("");
    setDescricao("");
    setPrioridade("");
  };
  return (
    <Container>
      <Sidebar>
        <button>Voltar a lista de tarefas</button>
        
      </Sidebar>
      <Content>
        <h1>Nova Tarefa</h1>

        <label>
          <input
            type="text"
            placeholder="Título"
            value={titulo}
            onChange={handleChangeTitulo}
          />
        </label>
        <br />
        <label>
          <input
            id="desc"
            type="text"
            placeholder="Descrição"
            value={descricao}
            onChange={handleChangeDescricao}
          />
        </label>
        <br />

        <h2>Prioridade</h2>

        <ul className="prioridade">
          <li>
            <input
              type="radio"
              id="normal"
              name="prioridade"
              value="normal"
              checked={prioridade === "normal"}
              onChange={handleChangePrioridade}
            />
            <label htmlFor="normal">Normal</label>
          </li>
          <li>
            <input
              type="radio"
              id="moderado"
              name="prioridade"
              value="moderado"
              checked={prioridade === "moderado"}
              onChange={handleChangePrioridade}
            />
            <label htmlFor="moderado">Moderado</label>
          </li>
          <li>
            <input
              type="radio"
              id="urgente"
              name="prioridade"
              value="urgente"
              checked={prioridade === "urgente"}
              onChange={handleChangePrioridade}
            />
            <label htmlFor="urgente">Urgente</label>
          </li>
        </ul>
        <br />
        <button onClick={handleCadastrar}>Cadastrar</button>
      </Content>
    </Container>
  );
}
