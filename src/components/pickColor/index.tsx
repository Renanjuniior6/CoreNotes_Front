import { Container, ColorContent, Color, CloseButton } from "./styles";
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
            <CloseButton size={18} onClick={() => setModal(false)}/>
        </Container>
    )
}