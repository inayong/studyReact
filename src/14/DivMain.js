import Div1 from "./Div1";
import { DivAtom, DivAtom2 } from "./DivAtom";
import { useRecoilValue } from "recoil";

const DivMain = () => {
  const n = useRecoilValue(DivAtom);
  const n2 = useRecoilValue(DivAtom2); 
    
  return (
    <main className="container">
      <div className="bg-slate-500 text-rose-500 m-10 p-10">
          <h1 className="text-rose-500">DivMain</h1>
          n={n}<br/>
          n2={n2}
          <Div1 />
      </div>
    </main>
  )
}

export default DivMain