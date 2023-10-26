import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import getcode from "./getcode.json";

const UltraFcst = () => {
    const [items, setItems] = useState() ;
    const [trs, setTrs] = useState();
    const [myItem, setMyItem] = useState({
        '항목명' : '',
        '예측시간' : '',
        '항목값' : '',
        '단위' : ''
    });

    //카테고리 -> option
    console.log(getcode)
    
    const ops = getcode
        .filter((item) => item['예보구분'] == '초단기예보' )
        .map((item) => 
            <option value={item['항목값']} key={item['항목값']}>
                {item['항목명']}({item['단위']})
            </option>
        ); 

        console.log("ops", ops)

    // select 값
    const sel = useRef();
    
    // 파라미터로 전송되는 자료 추출
    const dt = useParams().dt;
    const area = useParams().area;
    const x = useParams().x;
    const y = useParams().y;

    // 이벤트 처리
    const handleSelect = () => {
        if (items === undefined) return;

        console.log('handleselect', sel.current.value)

        let temp = items
                    .filter((i) => i['category'] === sel.current.value)

        let tempcd = getcode
                    .filter((item) =>
                    item['예보구분'] == '초단기예보' &&
                    item['항목값'] == sel.current.value)[0]

        let tempdata = temp.map((i) => [tempcd['항목명'],
                                        i['fcstTime'],
                                        i['fcstValue'],
                                        tempcd['단위']
    ])

        // let mytemp = {
        //     '항목명' : '',
        //     '예측시간' : '',
        //     '항목값' : '',
        //     '단위' : ''
        // }
        // mytemp['항목명'] = tempcd['']

        //             .map((i, idx) => 
        //                 <tr key={'tr' + idx}>
        //                 <td>{i['category']}</td>
        //                 <td>{i['fcstTime']}</td>
        //                 <td>{i['fcstValue']}</td>
        //                 </tr>
        //             )
        // setTrs(temp)                 
        console.log("select", temp)
        console.log("tempcd", tempcd)
    }

    // 컴포넌트 생성시 
    useEffect(() => {
        const apikey = 'HzBX%2F8n0fRqAN4w9FsiUwSN4y%2FPDLUMzhxIJd9ms1PwVI8LyZCFmxN4uMBKVS1rrBCGyttICror2zT0s5jwWwA%3D%3D';
        let url = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?';
        url = url + `serviceKey=${apikey}`;
        url = url + `&numOfRows=60&pageNo=1`;
        url = url + `&base_date=${dt}&base_time=0630`;
        url = url + `&nx=${x}&ny=${y}&dataType=json`;

        // console.log("url", url)
        fetch(url)
        .then(resp => resp.json())
        .then(data => setItems(data.response.body.items.item) )
        .catch(err => console.log(err))
    }, []);

    useEffect(() => {
        console.log(trs)
        console.log(myItem);
    }, [trs, myItem]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 p-10">
        <div className="font-bold text-xl">
        초단기예보 : {area} ({dt.substring(0,4)}-{dt.substring(4,6)}-{dt.substring(6,8)})
        </div>
        <div>
            <select ref={sel}id="sel" name="sel" onChange={handleSelect}>
                <option value=''>항목선택</option>
                {ops}
            </select>
        </div>
        <div className="table-auto md:col-span-2">
            <table>
                <thead>
                    <tr>
                    <th>항목명</th>
                    <th>예측시간</th>
                    <th>항목값</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {trs} */}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default UltraFcst;