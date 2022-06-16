import { CHANGE_BANNER } from "./constants"
import { requestBanners } from '@/service/recommend'

const changeBannerAction = (res) => ({ type: CHANGE_BANNER, payload: res })

export const getBannersAction = () => {
  return async dispatch => {
    const res = await requestBanners({ method: 'GET', url: 'banner' })
    // dispatch(res)
    dispatch(changeBannerAction(res))
  }
}