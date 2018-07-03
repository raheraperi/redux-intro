const images = (state = [], action) => {
  switch (action.type) {
    case 'ADD_IMAGE':
      return [
        ...state,
        {
          id: action.id,
          imgURL: action.imgURL
        }
      ]

    default:
      return state
  }
}

export default images
