import React, { memo, useEffect, useRef } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getAlbumsList } from '../../store/actionCreators'

import { AlbumWrapper, AlbumContent, SlotWrapper } from './style'
import ThemeHeaderRCM from '@/components/theme-header-rcm'
import MSBanner from '@/components/ms-banner'
import AlbumCover from '@/components/album-cover'

export default memo(function Album() {
  const MSBannerRef = useRef()

  const dispatch = useDispatch()
  const { albumsList } = useSelector(state => ({
    albumsList: state.getIn(['recommend', 'albumsList'])
  }), shallowEqual)

  useEffect(() => {
    dispatch(getAlbumsList())
  }, [dispatch])

  // banner slot
  const albumsBannerSlot = [0, 1].map(item => {
    return (
      <SlotWrapper key={item}>
        {
          albumsList.slice(item * 5, item * 5 + 5).map(albumsItem => {
            return (
              <AlbumCover
                key={albumsItem.id}
                info={albumsItem}
                width={130}
                size={100}
                bgp={-570}
              >
                {albumsItem.name}
              </AlbumCover>
            )
          })
        }
      </SlotWrapper>
    )
  })

  return (
    <AlbumWrapper>
      <ThemeHeaderRCM title="新碟上架"></ThemeHeaderRCM>
      <AlbumContent>
        <MSBanner
          attrs={
            {
              effect: "fade",
              ref: MSBannerRef,
              autoplay: true
            }
          }
        >
          { albumsBannerSlot }
        </MSBanner>
        <button onClick={e => MSBannerRef.current.prev()} className="arrow arrow-left sprite_02" />
        <button onClick={e => MSBannerRef.current.next()} className="arrow arrow-right sprite_02" />
      </AlbumContent>
    </AlbumWrapper>
  )
})
