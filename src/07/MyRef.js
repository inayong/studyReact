import Hh1 from '../comm/Hh1';
import { useState, useEffect, useRef } from 'react';

const MyRef = () => {
    const title = 'useRef Hook : 변수 제어';
    // let cnt1 = 0;  /* 바뀌는건 let */
    const [cnt1, setCnt1] = useState(); /* 괄호안에 아무것도없으면 undefined 괄호안은 초기값  */

    //Ref 변수
    const cnt2 = useRef(0);
    const txt1 = useRef();

    const handleClick = () => {
        // cnt1 = cnt1 + 1;
        setCnt1(cnt1 + 1); /* state는 set으로 변경 */
        console.log("handleClick", cnt1)
    }

    const handleClickRef = () => {
        cnt2.current = cnt2.current + 1;
        console.log("handleClickRef", cnt2.current)
    }

    const handleChange = () => {
        console.log("handleChange", txt1.current.value)
        setCnt1(parseInt(txt1.current.value)); /* txt1을 입력하면 state변수도 같이 바뀜 */
    }

    //컴포넌트 생성시 1번 호출
    useEffect(() => {
        setCnt1(100);

        txt1.current.focus(); /* 커서 표시 */
    }, []);

    //컴포넌트 업데이트시 생성 : cnt1 state변수가 업데이트될때
    useEffect(() => {
        console.log("useEffect", cnt1)
    }, [cnt1]);  /* cnt1이 바뀔때 얘가 바뀜 */

  return (
    <main className='container'>
        <article>
            {/* <Hh1 title='useRef Hook'/> /*속성값이 넘어감 속성값 이름이 title */}
            <Hh1 title={title} />
            <div className='grid'>
                <div>state 변수 : {cnt1}</div>
                <div>Ref 변수 : {cnt2.current}</div>
            </div>
            <footer>
                <div className='grid'>
                    <button onClick={handleClick}>state 변수 증가</button>
                    <button onClick={handleClickRef}>Ref 변수 증가</button>
                </div>
            </footer>
        </article>
        <article>
            <Hh1 title='useRef Hook : Form 제어' />
            <form>
                <input ref={txt1} type='number' id='txt1' placeholder='숫자입력' onChange={handleChange} />
            </form>
        </article>
        
    </main>
  )
}

export default MyRef;