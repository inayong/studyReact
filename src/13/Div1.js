import React from 'react'
import Div2 from './Div2'

const Div1 = ({n, setN}) => {
  return (
    <div>
        Div1
        <Div2 n={n} setN={setN} />
    </div>
  )
}

export default Div1