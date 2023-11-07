import React from 'react'
import Div2 from './Div2'
import { useRecoilState } from 'recoil'
import { DivAtom, DivAtom3 } from './DivAtom'

const Div1 = () => {
  const n = useRecoilState(DivAtom);
  const n3 = useRecoilState(DivAtom3);

  return (
    <main className='container bg-slate-400 m-2 p-10 rounded-md'>
      <div className='text-rose-400'>
          Div1<br/>
          n={n}<br/>
          n3={n3}
          <Div2  />
      </div>
    </main>
  )
}

export default Div1