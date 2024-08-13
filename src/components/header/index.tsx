import { Container, BoxLogo, Title, SearchBar } from './styles'

import Logo from '../../assets/logo.png'
// import SearchImg from '../../assets/search.png'

export function Header () {
    return (
        <Container>
            <BoxLogo>
                <img src={Logo} alt='Logo'/>
                <Title>CoreNotes</Title>
                <SearchBar placeholder='Pesquisar notas'/>
            </BoxLogo>
        </Container>
    )
}