import React from 'react'

const GalleryCard = ({imgsrc, title, content, sptag}) => {
    const sptags = sptag.map((item, idx) =>
    <span key={`sp$idx`} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        #{item}
        </span>
    );
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <img className="w-full" src={imgsrc} alt={title} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base">
                        {content}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    {sptags}
                </div>
        </div>
    )
}

export default GalleryCard;