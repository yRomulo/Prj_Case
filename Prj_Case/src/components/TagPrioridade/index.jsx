import { Container } from "./styles";

export function TagPrioridade({prioridade, ...rest}){
    return(
        <Container 
            className={prioridade}
            {...rest}>
            {prioridade}
        </Container>
    )
}