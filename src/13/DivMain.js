import { useState } from "react";
import Div1 from "./Div1";

const DivMain = () => {
    const [n, setN] = useState(0);
    
  return (
    <div>
        DivMain
        n={n}, n2={n*2}
        <Div1 n={n} setN={setN} />
    </div>
  )
}

export default DivMain