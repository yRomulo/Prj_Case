import { Container } from "./styles";

export function Button({ placeholder, ...rest}){
    
    return(
        <Container
            className={placeholder}
            type="button"
            {...rest }    
        >
            {placeholder}
            
        </Container>
    )
}