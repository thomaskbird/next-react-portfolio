import {
  TOGGLE_IS_LOADING
} from '~/redux/actions-general'

import { GeneralState } from '~/types/types'

const initialState = {
  isLoading: false
}

function generalReducer(state: GeneralState = initialState, data: any): any {
  switch(data.type) {
    case TOGGLE_IS_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading
      }
    default:
      return state;
  }
}

export const GeneralReducer = generalReducer;
