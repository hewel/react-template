import React, { useState, useEffect, useContext, createContext } from 'react'
import PropTypes from 'prop-types'

const NameContext = createContext('Me')

function BaseText(props) {
  const { children } = props
  const [name, setName] = useState('仮面ライダーカブト')
  useEffect(() => {
    setName(`Hyper ${children}`)
  }, [children])
  return (
    <NameContext.Provider value={children}>
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
  children: '仮面ライダーカブト',
}
BaseText.propTypes = {
  children: PropTypes.node,
}

export default BaseText
