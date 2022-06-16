import { requestAPI } from './request'

export async function requestBanners(payload) {
  const res = await requestAPI({ ...payload })
  return res.banners
}