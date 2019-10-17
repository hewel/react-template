import * as React from 'react'
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button'

const { useState } = React

export default function App(): React.ReactElement {
  const [text, setText] = useState('Beetle')

  const handleBtnClick = (): void => {
    setText(['Beetle', 'Bacon', ...['Zero', 'Pizza', 'Bike', 'Chair']][Math.floor(Math.random() * 7)])
  }

  return (
    <div className="app">
      <span>Hello World! {text}!</span>
      <PrimaryButton onClick={handleBtnClick}>Change {text}</PrimaryButton>
    </div>
  )
}
