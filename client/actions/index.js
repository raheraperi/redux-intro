let nextWordId = 0
let imgURLId = 0

export const addWord = (word) => {
  return {
    type: 'ADD_WORD',
    id: nextWordId++,
    word
  }
}

export const addImg = (imgURL) => {
  return {
    type: 'ADD_IMAGE',
    id: imgURLId++,
    imgURL
  }
}
