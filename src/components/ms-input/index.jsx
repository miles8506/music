import React from 'react'

import { Input } from 'antd'
import MSInputWrapper from './style'

export default function MSInput(props) {
  return (
    <MSInputWrapper custom-style={props.customStyle}>
      <Input {...props} />
    </MSInputWrapper>
  )
}
