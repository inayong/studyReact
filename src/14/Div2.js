import React from 'react'
import Div3 from './Div3'
import { useRecoilState } from 'recoil'
import { DivAtom, DivAtom4 } from './DivAtom'

const Div2 = () => {
  const n = useRecoilState(DivAtom);
  const n4 = useRecoilState(DivAtom4);

  return (
    <main className='container bg-slate-300 m-2 p-10'>
      <div className='text-rose-300'>
          Div2<br/>
          n={n}<br/>
          n4={n4}
          <Div3  />
      </div>
    </main>
  )
}

export default Div2