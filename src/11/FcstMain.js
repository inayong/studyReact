import ButtonBlue from '../comm/ButtonBlue';
import { useState, useEffect, useRef } from 'react';
import getxy from "./getxy.json";
import { Link } from 'react-router-dom';


const FcstMain = () => {

    //state 변수
    const [dt, setDt] = useState(); //날짜
    const [area, setArea] = useState(); // 지역
    const [x, setX] = useState(); //해당지역 x좌표
    const [y, setY] = useState(); //해당지역 y좌표

    //select -> option 생성
    // console.log("getxy", getxy);
    const ops = getxy.map((item) => 
        <option value={item['행정구역코드']} key={item['행정구역코드']}>
            {item['1단계']}
        </option>
    );


    //입력폼
    const dtRef = useRef();
    const selRef = useRef();

    //사용자 정의함수 : 날짜 변경시 발생
    const handleDtChange = () => {
        setDt(dtRef.current.value.replaceAll("-", ""));
    }

    //사용자 정의 함수 : 지역 변경시 발생
    const handleAreaChange = () => {
        // 1. sel의 값을 가져오기
        // selRef.current.value
        // 2. getxy에서 sel값과 행정구역코드가 같은 자료 추출
        let temp = getxy.filter((item) =>
                item['행정구역코드'] === parseInt(selRef.current.value))[0];
        // console.log("temp", temp)

        // 3. 상태변수 area, x, y를 변경
        setArea(temp['1단계']);
        setX(temp['격자 X']);
        setY(temp['격자 Y']);
    }

  //컴포넌트 생성시
    useEffect(() => {
        dtRef.current.focus();
    }, []);

    //dt 상태변수가 변경이 되었을 경우
    useEffect(() => {
        console.log("dt", dt);
    }, [dt]);

    // area, x, y 상태변수가 변경되었을 경우
    useEffect(() => {
        console.log("area", area, x, y)
    }, [area, x, y]);

  return (
    <form>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-20">
        <div className="first-letter:col-span-1 md:col-span-2 font-bold ">단기예보 입력 정보</div>
        <div>
            <input ref={dtRef} type='date' id='dt' name='dt' onChange={handleDtChange}/>
        </div>
        <div>
            <select ref={selRef} id='sel' name='sel' onChange={handleAreaChange}>
                <option value=''>지역선택</option>
                {ops}
            </select>
        </div>
        <div>
            <Link to={`/ultra/${dt}/${area}/${x}/${y}`}><ButtonBlue caption='초단기예보' /></Link>
        </div>
        <div>
            <Link to={`/vilage/${dt}/${area}/${x}/${y}`}><ButtonBlue caption='단기예보' /></Link>
        </div>
    </div>
    </form>
  )
}

export default FcstMain