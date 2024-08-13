import { Container, ColorContent, Color } from "./styles";
import { colors } from "../../styles/theme";
import { useState } from "react";

export function PickColor ({ setModal }) {
    const [ selectedColor, setSelectedColor] = useState<ColorProp | any>()

    type ColorProp = {
        color: string
    }

      console.log(selectedColor)

    return (
        <Container>
            <ColorContent>
            {colors.map((item) => (
                <Color 
                key={item.id} 
                color={item.color} 
                onClick={() => {
                    setSelectedColor(item.color)
                }}
             />
            ))}
            </ColorContent>
        </Container>
    )
}