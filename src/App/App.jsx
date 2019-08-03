import React, { useState } from 'react'
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button'
import BaseText from '../Components/BaseText'

export default function App() {
  const [text, setText] = useState('Beetle')

  const handleBtnClick = () => {
    setText(['Beetle', 'Bacon', 'Pizza', 'Bike', 'Chair'][Math.floor(Math.random() * 5)])
  }

  return (
    <div className="app">
      <span>Hello {text}!</span>
      <PrimaryButton onClick={handleBtnClick}>Change {text}</PrimaryButton>
      <BaseText>{text}</BaseText>
    </div>
  )
}
