// import { useParams } from "react-router-dom";
import TailH1 from "../comm/TailH1";
import TailSelect from "../comm/TailSelect";
import getcode from "./getcode.json";
import TailTable from "../comm/TailTable";
import { useState } from "react";

const Ultra = ({dt, area, m, titem}) => {
    //table 정보 상태변수
    const [tbitem, setTbitem] = useState();

    const gubun = m === '1' ? '초단기예보' : '단기예보';
    // const test = {'th' : ['항목명', '예측값', '항목값', '단위'], 
    //               'tr' : [[1,2,3,'%'], [4,5,6,'#']]};



    // 화면 title 정보
    let ultraTitle = area;
    ultraTitle = ultraTitle + gubun ;
    ultraTitle = ultraTitle + '(' + dt.substring(0,4) 
                            + '-' + dt.substring(4,6) 
                            + '-' + dt.substring(6,8);
    ultraTitle = ultraTitle + ')';

    // select op
    const opItem = getcode.filter((item) => item["예보구분"] === gubun)
                            .map((item) => [item["항목값"], item["항목명"] + '(' + item["항목값"] + ')'])

    //select box 항목선택
    const handleSelChange = (e) => {
        console.log("handleselchange", e.target.value)

        const sky = {'1' : '맑음', '2' : '구름많음', '4' : '흐림'};
        const pty = {'0' : '없음', '1' : '비', '2' : '비/눈', '3' : '눈', 
                    '4' : '소나기', '5' : '빗방울', '6' : '빗방울눈날림', '7' : '눈날림'}

        let itemName = getcode.filter((item) => item["항목값"] === e.target.value && item["예보구분"] === gubun)[0];
                            //   .map((item) => [item[]])
        console.log("itemName", itemName)

        let temp = {'th' : ['항목명', '예측시간', '항목값', '단위']};
        temp['tr'] = titem.filter((item) => item['category'] === e.target.value)
                          .map((item) => 
                            [itemName["항목명"], 
                            item['fcstTime'], 
                            item['category'] === 'SKY' ? sky[item['fcstValue']]
                             : item['category'] === 'PTY' ? pty[item['fcstValue']] : item['fcstValue']
                            (item['category'] === 'SKY') || (item['category'] === 'PTY') ? '': itemName["단위"]
                            ]
                          )
        // console.log(temp)
        setTbitem(temp);
    }

  return (
    <section className="p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <TailH1 title={ultraTitle} />
            </div>
            <div>
                <TailSelect id={'sel'}  opItem={opItem} handleChange={handleSelChange} />
            </div>
        </div>
        <div className="flex justify-center">
            {tbitem && <TailTable tbitem={tbitem} />}
        </div>
    </section>
  )
}

export default Ultra