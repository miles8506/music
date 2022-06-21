import { Map } from 'immutable'
import { CHANGE_BANNER, CHANGE_HOT_RECOMMEND, CHANGE_ALBUMS_LIST } from "./constants"

const initialState = Map({
  banners: [],
  hotRecommendList: [],
  albumsList: []
})

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_BANNER:
      return state.set('banners', action.payload)
    case CHANGE_HOT_RECOMMEND:
      return state.set('hotRecommendList', action.payload)
    case CHANGE_ALBUMS_LIST:
      return state.set('albumsList', action.payload)
    default:
      return state
  }
}
