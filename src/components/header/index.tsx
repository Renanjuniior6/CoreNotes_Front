import { Container, BoxLogo, Title, SearchBar } from './styles'
import Logo from '../../assets/logo.png'
import { useState } from 'react'
import { MagnifyingGlass } from '@phosphor-icons/react'

export function Header ({ tasks, setTasks }) {
    const [ inputValue, setInputValue ] = useState<string>()

  
         function fetchTasks () {

            const findNote = tasks.filter((item) => item.title.toLowerCase() === inputValue?.toLowerCase())

            console.log(findNote)
            setTasks(findNote)

        }

    return (
        <Container>
            <BoxLogo>
                <img src={Logo} alt='Logo'/>
                <Title>CoreNotes</Title>
                <SearchBar onChange={(value) => setInputValue(value.target.value)} placeholder='Pesquisar nota' />
                <MagnifyingGlass size={20} onClick={fetchTasks} />
            </BoxLogo>
        </Container>
    )
}