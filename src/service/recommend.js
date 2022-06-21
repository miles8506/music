import { requestAPI } from './request'

export async function requestBanners(payload) {
  const res = await requestAPI({ ...payload })
  return res.banners
}

export async function requestHotRecommend(payload) {
  const res = await requestAPI({ ...payload })
  return res.result
}

export async function requestAlbumsList(payload) {
  const res = await requestAPI({ ...payload })
  return res.albums
}