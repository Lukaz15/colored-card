import { ChangeEvent, MouseEvent, useState } from "react";
import {Card, Input} from "./styled-components/general"

function App() {
  const [color, setColor] = useState<string>('')
  const [inputValue, setInputValue] = useState<string>('')

  const handleInputValue: (e: ChangeEvent<HTMLInputElement>) => void = (e) => {
    e.preventDefault()
    setInputValue(e.target.value)
  }

  const handleChange: (e: MouseEvent) => void = (e) => {
    e.preventDefault()
    const hexPattern = /^#[0-9A-Fa-f]{3}([0-9A-Fa-f]{3})?$/;
    hexPattern.test(inputValue) ? setColor(inputValue) : alert("Enter a valid color in hexcode, please!")

  }

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column"
    }}>
      <Card backgroundColor={color || undefined}></Card>
      <form>
        <label htmlFor="select-color">Select the color of the card using hexcode</label><br></br>
        <Input type="text" id="select-color" placeholder="#00f" value={inputValue} onChange={handleInputValue}></Input>
        <button onClick={(e) => handleChange(e)} type="submit">Change</button>
      </form>
    </div>
  )
}

export default App
