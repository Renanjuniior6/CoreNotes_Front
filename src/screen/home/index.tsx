import { Header } from '../../components/header'
import { CreateNoteCard } from '../../components/createNoteCard'
import { NoteCard } from '../../components/noteCard'

import {Content} from './styles'

export function Home () {

    return (
        <Content>
            <Header />
            <CreateNoteCard />
            <NoteCard />
        </Content>
    )
   
}