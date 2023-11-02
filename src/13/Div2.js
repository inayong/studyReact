import React from 'react'
import Div3 from './Div3'

const Div2 = ({n, setN}) => {
  return (
    <div>
        Div2
        <Div3 n={n} setN={setN} />
    </div>
  )
}

export default Div2