import pusandata from './pusandata.json';
import ButtonBlue from '../comm/ButtonBlue';
import { useEffect, useRef, useState } from 'react';
import GalleryCard from '../comm/GalleryCard';

const Busan = () => {

    //select box
    const sel = useRef();

    // 상태
    const [item, setItem] = useState();

    const [tags, setTags] = useState();

    console.log(pusandata);

    const code = pusandata.map((item) =>
        // [item['콘텐츠ID'], item.콘텐츠명.replace('(한,영, 중간,중번,일)', '')]
        // [item['콘텐츠ID'], item.콘텐츠명.split('(')[0]]
        [item['콘텐츠ID'], item.콘텐츠명.slice(0,item.콘텐츠명.lastIndexOf('('))]
    );

    console.log(code);

    const opTag = code.map((item) => 
        <option key={item[0]} value={item[0]}>{item[1]}</option>
    );

    const getData = (uc) => {

        const apikey = 'HzBX%2F8n0fRqAN4w9FsiUwSN4y%2FPDLUMzhxIJd9ms1PwVI8LyZCFmxN4uMBKVS1rrBCGyttICror2zT0s5jwWwA%3D%3D';
        let url = 'https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?';
        url = url + `serviceKey=${apikey}`;
        url = url + `&pageNo=1&numOfRows=10&resultType=json`;
        url = url + `&UC_SEQ=${uc}`;

        console.log("url", url);

        fetch(url)
        .then((resp) => resp.json())
        .then((data) => setItem(data.getFestivalKr.item[0]))
        .catch((err) => console.log(err));
    }
    
    

    useEffect(() => {
        console.log("item", item);
        if (item === undefined) return;

        setTags (
            <GalleryCard key={item.UC_SEQ} 
                imgsrc={item.MAIN_IMG_THUMB}
                title={item.TITLE}
                content={item.ITEMCNTNTS.length < 100 ? item.ITEMCNTNTS : item.ITEMCNTNTS.substring(0, 100) + '...'}
                // content={item.ITEMCNTNTS}
                sptag={item.PLACE.indexOf < 0 ?[item.PLACE] :item.PLACE.split(',')}
            />
        );
    }, [item]);


    const handleOk = (e,msg) => {
        e.preventDefault();
        getData(sel.current.value);
        console.log(msg)
    }
    const handleCancel = (e,msg) => {
        e.preventDefault();
        console.log(msg)
    }

    const handleChange = () => {
        console.log(sel.current.value)
    }
    
    useEffect(() => {
        sel.current.focus();
    }, []);
    

    return (
       <main className='container'>
            <article>
                <header className="flex justify-center items-center">
                    <div className="text-3xl font-bold">
                        부산 축제 정보
                    </div>
                </header>
                <form>
                    <div className='grid'>
                        <div className='grid grid-cols-4 gap-4'>
                            <div className='col-span-2'>
                                <select ref={sel} id='sel' name='sel' onChange={handleChange}>
                                    <option value=''>축제명 선택</option>
                                    {opTag}
                                </select>
                            </div>
                            <div>
                                <ButtonBlue caption='확인' handleClick={(e) => handleOk(e,'ok')}/>
                            </div>
                            <div>
                                <ButtonBlue caption='취소' handleClick={(e) => handleCancel(e,'cancel')}/>
                            </div>
                        </div>
                    </div>
                </form>
            </article>
            {item && tags}
       </main>
    )
};


export default Busan;