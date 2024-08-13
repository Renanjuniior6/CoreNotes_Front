import { Container, ColorContent, Color } from "./styles";
import { colors } from "../../styles/theme";


export function PickColor ({setSelectedColor,  setModal }) {

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