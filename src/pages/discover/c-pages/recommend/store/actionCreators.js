import { CHANGE_BANNER, CHANGE_HOT_RECOMMEND, CHANGE_ALBUMS_LIST } from "./constants"
import { requestBanners, requestHotRecommend, requestAlbumsList } from '@/service'

// action
const changeBannerAction = (res) => ({ type: CHANGE_BANNER, payload: res })

const changeHotRecommend = (res) => ({ type: CHANGE_HOT_RECOMMEND, payload: res })

const changeAlbumsList = (res) => ({ type: CHANGE_ALBUMS_LIST, payload: res })

// thunk
export const getBannersAction = () => {
  return async dispatch => {
    const res = await requestBanners({ method: 'GET', url: 'banner' })
    dispatch(changeBannerAction(res))
  }
}

export const getHotRecommend = (limit = 8) => {
  return async dispatch => {
    const res = await requestHotRecommend({ method: 'GET', url: '/personalized', params: { limit } })
    dispatch(changeHotRecommend(res))
  }
}

export const getAlbumsList = (limit = 10) => {
  return async dispatch => {
    const res = await requestAlbumsList({ method: 'GET', url: '/top/album', params: { limit } })
    dispatch(changeAlbumsList(res))
  }
}