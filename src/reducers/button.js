export default function reducer(state = {
  isClassAdded: false
}, action) {
  switch (action.type) {
    case "ADD_BUTTON_ANIMATION":
      return {
        ...state,
        isClassAdded: true,
        payload: action.payload
      }

    case "REMOVE_BUTTON_ANIMATION":
      return {
        ...state,
        isClassAdded: false,
        payload: action.payload
      }
  }

  return state
}
