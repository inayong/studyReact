import MyDiv1 from "./MyDiv1";
import { useState } from "react";
const MyDiv = () => {

    // let n=0;
    //[변수명, 함수명] = useState(초기값);
    const [n, setN] = useState(0);

    const handleClick = (check) => {
        // n = n + 1;
        if (check) setN(n+1);
        else if (n > 0) setN(n-1);
        console.log(n);
    }

    // const handleClick2 = () => {
    //     if (n > 0)
    //     setN(n-1);
    // }

    return (
        <main className="container">
            <article>
                <header><h1>probs div</h1></header>
                <MyDiv1 n={n}/>

                <footer>
                    <span onClick={() => handleClick(true)}>💕</span>
                    <span>{n}</span>
                    {/* <span onClick={handleClick2}>👎</span> */}
                    <span onClick={() => handleClick(false)}>👎</span>
                </footer>
            </article>
        </main>
    );
}

export default MyDiv;