import React from 'react'
import Div2 from './Div2'

const Div1 = ({n, setN}) => {
  return (
    <main className='container bg-slate-400 m-2 p-10 rounded-md'>
      <div className='text-rose-400'>
          Div1
          <Div2 n={n} setN={setN} />
      </div>
    </main>
  )
}

export default Div1