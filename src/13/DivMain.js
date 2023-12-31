import { useState } from "react";
import Div1 from "./Div1";

const DivMain = () => {
    const [n, setN] = useState(0);
    
  return (
    <main className="container">
      <div className="bg-slate-500 text-rose-500 m-10 p-10">
          <h1 className="text-rose-500">DivMain</h1>
          n={n}<br />
          n2={n*2}
          <Div1 n={n} setN={setN} />
      </div>
    </main>
  )
}

export default DivMain