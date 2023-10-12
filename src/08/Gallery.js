import { FcPicture } from "react-icons/fc";
import ButtonBlue from "../comm/ButtonBlue";
import { useState, useEffect, useRef } from "react";
import GalleryCard from "../comm/GalleryCard";

const Gallery = () => {
    //키워드 상태변수
    const [kw, SetKw] = useState();
    
    //목록 상태 변수
    const [item, setItem] = useState();

    const [tags, setTags] = useState();

    //input box
    const txt1 = useRef();


    const handleOk = (e) => {
        e.preventDefault();
        console.log("ok")
        if (txt1.current.value === '') return;

        SetKw(txt1.current.value);
    }

    const handleCancel = (e) => {
        e.preventDefault();
        txt1.current.value = '';
        txt1.current.focus();
        setItem([]);
        console.log("cancel")        
    }

    const getData = (kw) => {
        console.log("getData", kw)

        const apikey = 'HzBX%2F8n0fRqAN4w9FsiUwSN4y%2FPDLUMzhxIJd9ms1PwVI8LyZCFmxN4uMBKVS1rrBCGyttICror2zT0s5jwWwA%3D%3D';
        //키워드 인코딩
        const enKw = encodeURI(kw);
        console.log("encodeURI", enKw)
        let url = 'https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?';
        url = url + `serviceKey=${apikey}`;
        url = url + `&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest`;
        url = url + `&arrange=A`; //A=촬영일, B=제목
        url = url + `&keyword=${enKw}`;
        url = url + `&_type=json`;

        console.log("url", url);

        fetch(url)
        .then((resp) => resp.json())
        .then((data) => setItem(data.response.body.items.item))
        .catch((err) => console.log(err));
    }

    //컴포넌트 생성시
    useEffect(() => {
        txt1.current.focus();
    }, []);

    //컴포넌트 업데이트
    useEffect(() => {
        console.log("kw",kw);

        getData(kw)
    }, [kw]);

    useEffect(() => {
        console.log("item", item);
        if (item === undefined) return;

        setTags(
            item.map((i) => 
                <GalleryCard key={i.galContentId} 
                    imgsrc={i.galWebImageUrl.replace('http:', 'https:')}
                    title={i.galTitle}
                    content={i.galPhotographyLocation}
                    sptag={i.galSearchKeyword.split(',')} 
                    refv={txt1}
                />
                )

        );

    }, [item]);

  return (
    <main className='container'>
        <article>
            <header className="flex justify-center items-center">
                <div className="text-3xl font-bold">
                    한국관광공사 관광사진 정보
                </div>
                <div>
                    <FcPicture className="text-4xl font-bold"/>
                </div>
            </header>
            <form>
                <div className="grid">
                    <div>
                        <input ref={txt1} type="text" id="txt1" name="txt1" placeholder="키워드를 입력하세요." />
                    </div>
                    <div className="grid">
                        <ButtonBlue caption='확인' handleClick={handleOk} />
                        <ButtonBlue caption='취소' handleClick={handleCancel} />
                    </div>
                </div>
            </form>
        </article>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-38">
            {item && tags}
        </section>
    </main>
  )
}

export default Gallery;