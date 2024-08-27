/* eslint-disable react/react-in-jsx-scope */
import { MagnifyingGlass } from "@phosphor-icons/react"
import { useState } from "react"

import Logo from "../../assets/logo.png"
import { useFetchAPI } from "../../hooks/useFetchAPI"
import { Task } from "../../services/api-types"
import { Container, BoxLogo, Title, SearchBar } from "./styles"

type HeaderProps = {
  setFilteredTask: (data: Task[]) => void
}

export function Header({ setFilteredTask }: HeaderProps) {
  const [inputValue, setInputValue] = useState<string>()

  const { tasks } = useFetchAPI()

  function fetchTasks() {
    const findNote = tasks?.filter(
      (item) => item.title.toLowerCase() === inputValue?.toLowerCase(),
    )

    setFilteredTask(findNote)
  }

  return (
    <Container>
      <BoxLogo>
        <img src={Logo} alt="Logo" />
        <Title onClick={() => setFilteredTask([])}>CoreNotes</Title>
        <SearchBar
          onChange={(value) => setInputValue(value.target.value)}
          placeholder="Pesquisar nota"
        />
        <MagnifyingGlass size={20} onClick={fetchTasks} />
      </BoxLogo>
    </Container>
  )
}
