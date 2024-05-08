import { Container } from "./styles";

export function TagIsConcluida({isConcluida, ...rest}){
    return(
        <Container 
            className={isConcluida ? "concluida" : "pendente"}
            {...rest}>
            {isConcluida ? "concluída" : "pendente"}
        </Container>
    )
}