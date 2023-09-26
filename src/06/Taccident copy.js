import Hh1 from "../comm/Hh1";
import data from "./dataTaccident.json";
const Taccident = () => {
    console.log(data.data)
    const tdata = data.data;    

    // let c1 = tdata.map((item) => item.사고유형_대분류); 
    let c1 = tdata.map((item) => item["사고유형_대분류"]); 
    c1 = [...new Set(c1)]; //중복제거
    console.log(c1);

    let c1Tag = c1.map((item, idx) =>
        <li key={`li${idx}`}><button>{item}</button></li>
    );

    return (
        <main className="container">
            <article>
                <Hh1 title='도로교통공단 사고유형별 교통사고 통계' />
                <nav>
                    <ul>
                        <li><strong>사고유형 대분류</strong></li>
                    </ul>
                    <ul>
                        {c1Tag}
                    </ul>
                </nav>
            </article>
        </main>
    );
}

export default Taccident