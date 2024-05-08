import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { Container, Sidebar, Content } from "./styles.js";

import { Task } from "../../components/Task";
import { EditTask } from "../../components/EditTask";

export function NotesShow(tarefa) {
  const [tarefasOriginais, setTarefasOriginais] = useState([]);
  const [tarefasExibidas, setTarefasExibidas] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    handleListarTarefas();
  }, []);

  const handleListarTarefas = () => {
    const tarefasSalvas = JSON.parse(localStorage.getItem("tarefas")) || [];
    setTarefasOriginais(tarefasSalvas);
    setTarefasExibidas(tarefasSalvas);
  };

  const handleRemoverTarefa = (index) => {
    const novasTarefas = tarefasOriginais.filter((_, i) => i !== index);
    setTarefasOriginais(novasTarefas);
    setTarefasExibidas(novasTarefas);
    localStorage.setItem("tarefas", JSON.stringify(novasTarefas));
  };

  const handleStartEdit = (tarefa) => {
    setTaskToEdit(tarefa);
    setIsEditing(true);
  };

  const handleSaveEdit = (taskToEdit) => {
    const updatedTasks = tarefasOriginais.map((tarefa) =>
      tarefa.id === taskToEdit.id ? taskToEdit : tarefa
    );
    setTarefasOriginais(updatedTasks);
    setTarefasExibidas(updatedTasks);
    setIsEditing(false);
    setTaskToEdit(null);
    localStorage.setItem("tarefas", JSON.stringify(updatedTasks));
  };

  const handleContarTarefas = (prioridade) => {
    return tarefasOriginais.filter((tarefa) => tarefa.prioridade === prioridade)
      .length;
  };

  const handleListarPorPrioridade = (prioridade) => {
    const tarefasFiltradas = tarefasOriginais.filter(
      (tarefa) => tarefa.prioridade === prioridade
    );
    setTarefasExibidas(tarefasFiltradas);
  };

  const handleContarConcluidas = () => {
    return tarefasOriginais.filter((tarefa) => tarefa.isConcluida).length;
  };

  const handleListarPorConcluidas = (isConcluida) => {
    const tarefasFiltradas = tarefasOriginais.filter(
      (tarefa) => tarefa.isConcluida === isConcluida
    );
    setTarefasExibidas(tarefasFiltradas);
  };

  return (
    <Container>
      <Sidebar>
        <input type="search" name="Procurar" id="" placeholder="Procurar" />
        <ul>
          <li>
            <button onClick={() => handleListarPorConcluidas(false)}>
              <span>{tarefasOriginais.length - handleContarConcluidas()}</span>
              <p>pendentes</p>
            </button>
          </li>
          <li>
            <button onClick={() => handleListarPorConcluidas(true)}>
              <span>{handleContarConcluidas()}</span>
              <p>concluídas</p>
            </button>
          </li>
          <li>
            <button onClick={() => handleListarPorPrioridade("urgente")}>
              <span>{handleContarTarefas("urgente")}</span>
              <p>urgentes</p>
            </button>
          </li>
          <li>
            <button onClick={() => handleListarPorPrioridade("moderado")}>
              <span>{handleContarTarefas("moderado")}</span>
              <p>moderadas</p>
            </button>
          </li>
          <li>
            <button onClick={() => handleListarPorPrioridade("normal")}>
              <span>{handleContarTarefas("normal")}</span>
              <p>normais</p>
            </button>
          </li>
          <li>
            <button onClick={() => handleListarTarefas()}>
              <span>{tarefasOriginais.length}</span>
              <p>todas</p>
            </button>
          </li>
        </ul>
      </Sidebar>
      <Content>
        <h1>Listagem de tarefas: </h1>
        <ul>
          {isEditing ? (
            <EditTask
              titulo={tarefa.titulo}
              prioridade={tarefa.prioridade}
              descricao={tarefa.descricao}
              task={taskToEdit}
              onSave={handleSaveEdit}
              onCancel={() => setIsEditing(false)}
            />
          ) : (
            tarefasExibidas.map((tarefa, index) => (
              <div key={index}>
                <Task
                  titulo={tarefa.titulo}
                  prioridade={tarefa.prioridade}
                  descricao={tarefa.descricao}
                  isConcluida={tarefa.isConcluida}
                  onRemover={() => handleRemoverTarefa(index)}
                  onEditar={() => handleStartEdit(tarefa)}
                />
              </div>
            ))
          )}
        </ul>
        <Link to="/create">
          <button id="add">+</button>
        </Link>
      </Content>
    </Container>
  );
}
