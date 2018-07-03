import React from 'react'

import Words from './Words'
import AddWord from './AddWord'
import Images from './Images'
import AddImage from './AddImage'

const App = () => (
  <div className='app-container'>
    <div>
      <Words />
      <AddWord />
    </div>
    <div className='ImageContainer'>
      <Images/>
      <AddImage/>
    </div>
  </div>
)

export default App
