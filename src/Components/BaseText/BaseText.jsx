import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function BaseText(props) {
  const { text } = props
  const [name, setName] = useState('仮面ライダーカブト')
  useEffect(() => {
    setName(`Hyper ${text}`)
  }, [text])
  return <BaseSpan>I&#39;m {name} !</BaseSpan>
}
function BaseSpan({ children, ...extraProps }) {
  return <span {...extraProps}>{children}</span>
}
BaseText.defaultProps = {
  text: '仮面ライダーカブト',
}
BaseText.propTypes = {
  text: PropTypes.string,
}

export default BaseText
