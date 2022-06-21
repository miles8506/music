import React, { memo } from 'react'

import { Carousel } from 'antd'
import { CarouselWrapper } from './style'

export default memo((props) => {
  const { children, attrs } = props

  return (
    <CarouselWrapper>
      <Carousel {...attrs}>
        {children}
      </Carousel>
    </CarouselWrapper>
  )
})
