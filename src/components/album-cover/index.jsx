import React, { memo } from 'react'

import { formatImageSize } from '../../utils/format'

import { AlbumWrapper } from './style'

export default memo(function AlbumCover(props) {
  const { picUrl,name,  artist } = props.info
  const { width = 130, size = 100, bgp = -570 } = props;
  console.log(props);
  return (
    <AlbumWrapper width={width} size={size} bgp={bgp}>
      <div className="album-img">
        <img src={formatImageSize(picUrl, size)} alt="" />
        <a href="/todo" className='cover image_cover'>{artist.name}</a>
      </div>
      <div className="album-info">
        <div className="album-name text-nowrap">{name}</div>
        <div className="album-author text-nowrap">{artist.name}</div>
      </div>
    </AlbumWrapper>
  )
})
