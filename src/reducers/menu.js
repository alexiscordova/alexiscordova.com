export default function reducer(state = { isMenuOpen: false }, action) {
  switch (action.type) {
    case "OPEN_MENU":
      return {
        ...state,
        isMenuOpen: true
      }
    case "CLOSE_MENU":
      return {
        ...state,
        isMenuOpen: false
      }
  }

  return state
}
