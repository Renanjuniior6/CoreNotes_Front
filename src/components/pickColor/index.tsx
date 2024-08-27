/* eslint-disable react/react-in-jsx-scope */
import { useFetchAPI } from "../../hooks/useFetchAPI"
import { colors } from "../../styles/theme"
import { Container, ColorContent, Color } from "./styles"

type PickColorProps = {
  _id: string
  setModal: (data: boolean) => void
}

export function PickColor({ _id, setModal }: PickColorProps) {
  const { updateTask } = useFetchAPI()

  function selectedColor(color: string) {
    const data = { color, _id }

    updateTask(data)

    setModal(false)
  }

  return (
    <Container>
      <ColorContent>
        {colors.map((item) => (
          <Color
            key={item.id}
            color={item.color}
            onClick={() => {
              selectedColor(item.color)
            }}
          />
        ))}
      </ColorContent>
    </Container>
  )
}
