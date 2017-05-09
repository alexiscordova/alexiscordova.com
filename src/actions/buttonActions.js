export function addButtonAnimation(name) {
  return {
    type: 'ADD_BUTTON_ANIMATION',
    payload: name
  }
}

export function removeButtonAnimation(name) {
  return {
    type: 'REMOVE_BUTTON_ANIMATION',
    payload: name
  }
}
