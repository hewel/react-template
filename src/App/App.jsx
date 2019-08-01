import React, { useState } from 'react'
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button'
import BaseText from '../Components/BaseText'

export default function App() {
  const [text, setText] = useState('Beetle')

  const handleBtnClick = () => {
    setText(['Beetle', '哔头', 'Kabuto'][Math.floor(Math.random() * 3)])
  }

  return (
    <div className="app">
      <span>Hello World!</span>
      <PrimaryButton onClick={handleBtnClick}>Change Beetle</PrimaryButton>
      <BaseText text={text} />
    </div>
  )
}
