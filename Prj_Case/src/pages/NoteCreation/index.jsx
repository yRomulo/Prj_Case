import { Container, Sidebar, Content } from './styles'

export function NoteCreation() {
    return(
        <Container>
            <Sidebar></Sidebar>
            <Content>
                <h1>Nova Tarefa</h1>
                <input type="text" placeholder='Título'/>
                <input type="text" placeholder='Descrição' />
            </Content>
        </Container>
    )
 }