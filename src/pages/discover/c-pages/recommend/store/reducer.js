import { Map } from 'immutable'
import { CHANGE_BANNER } from "./constants"

const initialState = Map({
  banners: []
})

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_BANNER:
      return state.set('banners', action.payload)
    default:
      return state
  }
}
