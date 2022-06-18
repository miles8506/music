import React, { memo } from 'react'
import PropsType from 'prop-types'

import {ThemeHeaderRCMWrapper} from './style'

const ThemeHeaderRCM = memo(function (props) {
  const { title, keywords } = props

  return (
    <ThemeHeaderRCMWrapper>
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className='keywords'>
          {
            keywords.map(item => {
              return (
                <a href="todo" className='keywords-item' key={item}>{item}</a>
              )
            })
          }
        </div>
      </div>
      <div className="right">
        <a href="todo">更多</a>
        <i className='more-icon sprite_02' />
      </div>
    </ThemeHeaderRCMWrapper>
  )
})

ThemeHeaderRCM.propTypes = {
  title: PropsType.string.isRequired,
  keywords: PropsType.array
}

ThemeHeaderRCM.defaultProps = {
  keywords: []
}

export default ThemeHeaderRCM;
