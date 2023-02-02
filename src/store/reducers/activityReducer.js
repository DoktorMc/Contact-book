import { ACTION_CHANGE_ACTIVITY } from "../actions/activityActions";


const initialState = {
  activity: false,
};

const activityReducer = (state = initialState,{type, payload}) => {
  switch (type) {
    case ACTION_CHANGE_ACTIVITY:
      return {
        ...state,
        activity: !state.activity
      }

    default: return state
  }
}

export default activityReducer;