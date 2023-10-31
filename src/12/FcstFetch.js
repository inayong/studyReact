import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Ultra from "./Ultra";

const FcstFetch = () => {
    //파라미터 값
    const dt = useParams().dt;
    const area = useParams().area;
    const x = useParams().x;
    const y = useParams().y;
    const m = useParams().m;  

    //환경변수 값 가져오기
    const apikey = process.env.REACT_APP_API_KEY;

    //상태변수
    const [titem, setTitem] = useState([]);

    useEffect(() => {
        let url;
        if (m === '1') {
            url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?';
            url = url + `serviceKey=${apikey}`;
            url = url + `&numOfRows=60&pageNo=1`;
            url = url + `&base_date=${dt}&base_time=0630`;
            url = url + `&nx=${x}&ny=${y}&dataType=json`;
        }
        else {
            url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?';
            url = url + `serviceKey=${apikey}`;
            url = url + `&numOfRows=60&pageNo=1`;
            url = url + `&base_date=${dt}&base_time=0500`;
            url = url + `&nx=${x}&ny=${y}&dataType=json`;
          }

        //   console.log("url", url)

        fetch(url)
          .then(resp => resp.json())
          .then(data => setTitem(data.response.body.items.item))
          .catch(err => console.log(err))

    }, []);

    useEffect(() => {
        console.log("fcstfetch", titem)
    }, [titem]);

  return (
    <div>
        {/* {titem && <Ultra dt={dt} area={area} m={m} titem={titem} />} */}
        <Ultra dt={dt} area={area} m={m} titem={titem} />
    </div>
  )
}

export default FcstFetch