import { Container, Header, Text, Footer } from "./styles";
import { TagPrioridade } from "../TagPrioridade";
import { TagIsConcluida } from "../TagIsConcluida";
import { Button } from "../Button";

export function Task({ titulo, prioridade, descricao, isConcluida, onRemover, onEditar }) {
  const handleRemoverTarefa = () => {
    onRemover();
  };
  const handleEditarTarefa = () => {
    onEditar();
  };
  const handleIsPendente = () => {
    if(isPendente === "true"){

    };
  }
  return (
    <Container>
      <Header>
        <input type="checkbox" name="" id="" checked={isConcluida} readOnly/>
        <label>{titulo}</label>
        <br />
        <TagPrioridade prioridade={prioridade} />
        <TagIsConcluida isConcluida={isConcluida} />
      </Header>
      <Text>
        <div>{descricao}</div>
      </Text>
      <Footer>
        <Button placeholder="Editar" onClick={handleEditarTarefa}></Button>
        <Button placeholder="Remover" onClick={handleRemoverTarefa}></Button>
      </Footer>
    </Container>
  );
}
