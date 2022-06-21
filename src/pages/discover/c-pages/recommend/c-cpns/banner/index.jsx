import React, { memo, useMemo, useEffect, useState, useRef, useCallback } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getBannersAction } from '../../store/actionCreators'

import {
  BannerWrapper,
  LeftBanner,
  RightBanner
} from './style'
import MSBanner from '@/components/ms-banner'

export default memo(() => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const carouselRef = useRef()
  const nextPage = useCallback((from, to) => {
    setCurrentBannerIndex(to)
  }, [])

  const dispatch = useDispatch()
  const { banners } = useSelector(state => ({ banners: state.getIn(['recommend', 'banners']) }), shallowEqual)

  useEffect(() => {
    dispatch(getBannersAction())
  }, [dispatch])

  const blurImageUrl = `${banners[currentBannerIndex]?.imageUrl}?imageView&blur=40x20`

  // banner slot
  const BannerSlot = useMemo(() => banners.map(item => {
    return (
      <img src={item.imageUrl} alt={item.typeTitle} key={item.typeTitle}/>
    )
  }), [banners])

  return (
    <BannerWrapper bgcImage={blurImageUrl}>
      <div className="banner wrap-v2">
        <LeftBanner>
          <MSBanner
            attrs={
              {
                effect: "fade",
                ref: carouselRef,
                beforeChange: nextPage,
                autoplay: true
              }
            }
          >
            { BannerSlot }
          </MSBanner>
        </LeftBanner>
        <RightBanner></RightBanner>
        <div className="control-btn left-btn" onClick={e => carouselRef.current.prev()} />
        <div className="control-btn right-btn" onClick={e => carouselRef.current.next()} />
      </div>
    </BannerWrapper>
  )
})