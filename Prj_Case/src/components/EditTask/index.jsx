import { useState } from "react";
import { Container, Header, Text, Footer } from "./styles";

import { Button } from "../Button";

export function EditTask({ isEditing = false, onSave, onCancel, task, ...rest }) {
  const [titulo, setTitulo] = useState(task.titulo);
  const [descricao, setDescricao] = useState(task.descricao);
  const [prioridade, setPrioridade] = useState(task.prioridade);
  const [isConcluida, setIsConcluida] = useState(task.isConcluida || false);
  
  const handleSalvarTarefa = () => {
    const tarefaAtualizada = { ...task, titulo, descricao, prioridade, isConcluida };
    onSave(tarefaAtualizada); // Chama a função onSave passando a tarefa atualizada
  };

  const handleCancelar = () => {
    onCancel();
  };

  const handleChangeTitulo = (event) => {
    setTitulo(event.target.value);
  };

  const handleChangeDescricao = (event) => {
    setDescricao(event.target.value);
  };

  const handleChangePrioridade = (event) => {
    setPrioridade(event.target.value);
  };

  const handleChangeIsConcluida = () => {
    setIsConcluida(!isConcluida); // Inverte o valor de isPendente ao clicar na caixa de seleção
  };

  return (
    <Container>
      <Header>
        <input
          type="checkbox"
          
          
          // name="isConcluida"

          // value="true"
          checked={isConcluida}
          onChange={handleChangeIsConcluida}
        />
        <label>
          Editando:{" "}
          <input
            type="text"
            value={titulo}
            onChange={handleChangeTitulo}
          />
        </label>
        <br />
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
      </Header>
      <Text>
        <div>
          <textarea
            value={descricao}
            onChange={handleChangeDescricao}
          />
        </div>
      </Text>
      <Footer>
        <Button placeholder="Salvar" onClick={handleSalvarTarefa}></Button>
        <Button placeholder="Cancelar" onClick={handleCancelar}></Button>
      </Footer>
    </Container>
  );
}
