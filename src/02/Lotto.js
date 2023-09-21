import { useEffect, useState } from "react";
import LottoNums from "./LottoNums";

const Lotto = () => {
    const [nums, setNums] = useState();

    //버튼 클릭
    const handleClick = () => {
        let temp = [];

        while (temp.length < 7) {
            let n = Math.floor(Math.random() * 45) + 1;
            if (temp.indexOf(n) < 0) temp.push(n);
        }
    setNums(temp);
    }


    useEffect(() => {
        console.log("nums=", nums);
    }, [nums]);
        

    return (
        <main className="container">
            <article>
                <header>
                    <h1>로또생성기</h1>
                </header>
                { nums ? <LottoNums ns={nums} /> : '번호를 생성해 주십시오.'}
                <footer>
                    <button onClick={handleClick}>생성하기</button>
                </footer>
            </article>
        </main>
    );
}

export default Lotto;