import { useState } from "react";

const Clocktime = () => {
//     const [getDate, setGetDate] = useState([]);

//     setGetDate( () =>
//     <div>현재시간 : {new Date().toLocaleTimeString()}</div>
// ));

    return (
        <>
            <p>
                Hello React!!
            </p>
            <div>현재시간 : {new Date().toLocaleTimeString()}</div>
        </>
    );
}

export default Clocktime;