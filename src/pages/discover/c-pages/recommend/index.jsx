import React, { memo } from 'react'

import Banner from './c-cpns/banner'
import { 
  Content,
  RecommendLeft,
  RecommendRight
 } from './style'
import HotRecommend from './c-cpns/hot-recommend'
import Album from './c-cpns/album'
import Ranking from './c-cpns/ranking'

export default memo(function() {
  return (
    <div>
      <Banner />
      <Content className='wrap-v2'>
        <RecommendLeft>
          <HotRecommend />
          <Album />
          <Ranking />
        </RecommendLeft>
        <RecommendRight />
      </Content>
    </div>
  )
})
