import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ThemeHeaderRCM from '@/components/theme-header-rcm'
import { getHotRecommend } from '../../store/actionCreators'
import { HotRecommendList } from './style'
import SongDetail from '@/components/song-detail'

export default memo(function HotRecommend() {
  const dispatch = useDispatch()
  const hotRecommendList = useSelector(state => state.getIn(['recommend', 'hotRecommendList']))

  useEffect(() => {
    dispatch(getHotRecommend())
  }, [dispatch])
  return (
    <div>
      <ThemeHeaderRCM title="熱門推薦" keywords={['華語', '流行', '搖滾', '民謠', '電子']} />
      <HotRecommendList>
        {
          hotRecommendList.map(item => {
            return (<SongDetail info={item} key={item.name}/>)
          })
        }
      </HotRecommendList>
    </div>
  )
})
