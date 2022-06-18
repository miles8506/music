import React, { memo } from 'react'
import { formatCount, formatImageSize } from '../../utils/format'

import {
  SongDetailWrapper,
  SongDetailPic,
  SongName
} from './style'

export default memo(function (props) {
  const { name, picUrl, playCount } = props.info

  return (
    <SongDetailWrapper>
      <SongDetailPic>
        <img src={formatImageSize(picUrl, 140)} alt={name} className='song-img'/>
        <div className="bar sprite_covor">
          <div className='bar-count'>
            <i className='sprite_icon erji' />
            <p className='count'>{formatCount(playCount)}</p>
          </div>
          <i className='sprite_icon play' />
        </div>
      </SongDetailPic>
      <SongName className="song-name text-nowrap">{name}</SongName>
    </SongDetailWrapper>
  )
})
