import { ALL_DATA_LOADED } from '../action'

export default function (state = {}, action) {
  switch (action.type) {
    case ALL_DATA_LOADED:
      return { ...state, data: action.payload }
    default:
      return state
  }
}
