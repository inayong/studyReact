import Hh1 from "../comm/Hh1";
import data from "./dataFrcst.json";
import style from "./Frcst.module.css";
import { useState, useEffect } from "react";

const Frcst = () => {
    console.log(data)
    const dtkey = ["frcstOneDt", "frcstTwoDt", "frcstThreeDt", "frcstFourDt" ];
    const dnkey = ["frcstOneCn", "frcstTwoCn", "frcstThreeCn", "frcstFourCn",] ;

    //state 변수
    const [cnTag, setCnTag] = useState([]);    

    // 날짜key : 지역미세먼지value 인 dtcn 오브젝트 생성
    let dtcn = {};
    dtkey.map((item, idx) => 
        dtcn[data[item]] = data[dnkey[idx]]
    ); //item 요소, idx 위치값
    console.log("dtcn", dtcn);
    console.log("dnkey", dnkey);

    //날짜 영역 만들기
    console.log("dtcn key", Object.keys(dtcn));
    let dtTag = Object.keys(dtcn).map((item, idx) =>
        <div 
            key={`dtcn${idx}`} 
            className={style.dtcnkey}
            onClick={() => { handleClick(item) }} 
        >
            {item}
        </div>
    );

    //날짜가 클릭되었을 때 실행 함수
    const handleClick = (k) => {

        console.log("click", dtcn[k])
        let temp = dtcn[k].split(',');
        temp = temp.map((item, idx) => { 
            // <div key={`cn`+idx}>{item}</div>
            let splitem = item.split(':');
            return (
                <div key={`cn`+idx}>
                    <span className={style.sp1}>{splitem[0]}</span>
                    { splitem[1].trim() === '낮음' 
                    ? <span className={style.sp21}>{splitem[1]}</span>
                    : splitem[1].trim() === '보통'
                        ? <span className={style.sp22}>{splitem[1]}</span>
                        : <span className={style.sp23}>{splitem[1]}</span>
                    }
                </div>
            )
         });
        // console.log("click", temp)
        setCnTag(temp);
    };

    // useEffect(() => {
    //     console.log("cnTag", cnTag)
    // }, [cnTag]);

    // // 미세먼지 정보
    // console.log("dtcn val", Object.values(dtcn));
    // let cnTag = Object.values(dtcn).map((item, idx) => 
    //     <div key={`dtcn${idx}`}>{item}</div>
    // );

  return (
    <main className='container'>
        <article>
            <Hh1 title='미세먼지확인' />
            <div className="grid">
                {dtTag}
            </div>
            <div className="grid">
                {cnTag}
            </div>
        </article>
    </main>
  )
};

export default Frcst;