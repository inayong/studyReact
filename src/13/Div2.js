import React from 'react'
import Div3 from './Div3'

const Div2 = ({n, setN}) => {
  return (
    <main className='container bg-slate-300 m-2 p-10'>
      <div className='text-rose-300'>
          Div2
          <Div3 n={n} setN={setN} />
      </div>
    </main>
  )
}

export default Div2