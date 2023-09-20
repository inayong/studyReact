import MyComN from "./MyComN";
const MyCom = () => {
    let n = undefined;
    // let n = 10;

    //변수로처리
    // let comTag ;

    // if (n === undefined) {
    //     comTag = <div>값이 없습니다.</div>
    // }
    // else {
    //     comTag = <MyComN n={n} n1={n*2} />
    // }

    return (
        <main className="container">
            <article>
                <header>MyCom</header>
                {/* { 
                    //삼항연산처리
                    n === undefined 
                    ? <div>값이 없습니다.</div> 
                    : <MyComN n={n} n1={n*2} />
                } */
                    // 변수로 처리
                    // comTag

                    //falsy 연산 (이게아니면 안나옴)
                    n && <MyComN n={n} n1={n*2} />
                }
                {/* <MyComN n={n} n1 ={n+1}/>
                <MyComN n={20} n1 ={n+11}/> 
                <MyComN n={n*10} n1={n*20}/>    */}
            </article>
        </main>
    );
}

export default MyCom;