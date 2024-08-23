import { Container, ColorContent, Color } from "./styles";
import { colors } from "../../styles/theme";

import { useFetchAPI } from '../../hooks/useFetchAPI'


export function PickColor ({ _id, setModal}) {

    const { updateTask } = useFetchAPI()

      function selectedColor (color: string) {

        const data = {color, _id}

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