import React, { useState, useEffect, useContext, createContext } from 'react'
import PropTypes from 'prop-types'

const NameContext = createContext('Me')

function BaseText(props) {
  const { text } = props
  const [name, setName] = useState('仮面ライダーカブト')
  useEffect(() => {
    setName(`Hyper ${text}`)
  }, [text])
  return (
    <NameContext.Provider value={text}>
      <BaseSpan>I&#39;m {name} !</BaseSpan>
    </NameContext.Provider>
  )
}

function BaseSpan({ children, ...extraProps }) {
  const name = useContext(NameContext)
  return (
    <span {...extraProps}>
      {name}-{children}
    </span>
  )
}
BaseText.defaultProps = {
  text: '仮面ライダーカブト',
}
BaseText.propTypes = {
  text: PropTypes.string,
}

export default BaseText
