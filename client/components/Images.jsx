import React from 'react'
import {connect} from 'react-redux'

import Image from './Image'

const Images = ({images}) => (
  <div>
    {images.map(image =>
      <Image key={image.id}
        {...image}
      />
    )}
  </div>
)

const mapStateToProps = (state) => {
  return {
    images: state.images
  }
}

export default connect(mapStateToProps)(Images)
