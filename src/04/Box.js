import Hh1 from '../comm/Hh1';
import style from './Box.module.css';
import { useRef, useState, useEffect } from 'react';

const Box = () => {
    //날짜선택
    const dt = useRef();
    const [cdt, setCdt] = useState(); 

    const getData = (dt) => {
        let apikey = "f5eef3421c602c6cb7ea224104795888";
        let tDt = dt.value.replaceAll("-", "");
        let url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json";
        url = url + `?key=${apikey}`;
        url = url + `&targetDt=${tDt}`;

        
        

    fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data);
    })
    }


    //컴포넌트 생성시 포커스 처음 한번만 []
    useEffect (() => {
        // dt.current.focus();
        const ytd = new Date();
        ytd.setDate(ytd.getDate() - 1);
        let y = `${ytd.getFullYear()}`;
        let m = ytd.getMonth() + 1 < 10 ? `0${ytd.getMonth() + 1}`
                                    : `${ytd.getMonth() + 1}`;
        let d = ytd.getDate() < 10 ? `0${ytd.getDate()}`
                                : `${ytd.getDate()}`;
        console.log(y+m+d);

        //어제 날짜로 기본 값 설정
        dt.current.value = `${y}-${m}-${d}`;
        setCdt(y+m+d);

    }, []);

    useEffect(()=>{
        console.log(cdt);
    },[cdt])

    //날짜가 변경되었을 때
    const handleChange = () => {
        let temp = dt.current.value.replaceAll('-', ''); //'-' 없애서 출력
        // temp = temp.replaceAll('-', '');
        setCdt(temp)
        console.log(temp)
    }


    




    return (
        <main className='container'>
            <Hh1 title='박스오피스' />
            <article>
                <header>
                <div className={style.dt}>선택 날짜 : {cdt}</div>
                    <form>
                        <input ref={dt} type='date' id='dt' name='dt' onChange={handleChange}/>
                    </form>
                </header>
            </article>
        </main>
    )
}

export default Box;