import pusandata from './pusandata.json';
// import ButtonBlue from '../comm/ButtonBlue';
// import { useEffect, useRef, useState } from 'react';
import GalleryCard from '../comm/GalleryCard';

const Busan = () => {

    const items = pusandata.map((item) => 
        <GalleryCard key={item.콘텐츠ID} 
            imgsrc={item.썸네일이미지URL}
            title={item.제목}
            content={item.상세내용.length < 100 ? item.상세내용 : item.상세내용.substring(0, 100) + '...'}
            sptag={item.주요장소.indexOf < 0 ?[item.주요장소] :item.주요장소.split(',')}
        />
    );

    return (
       <main className='container'>
            <article>
                <header className="flex justify-center items-center">
                    <div className="text-3xl font-bold">
                        부산 축제 정보
                    </div>
                </header>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    {items}
                </div>
            </article>
            
       </main>
    )
};


export default Busan;