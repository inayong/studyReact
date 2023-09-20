import style from './MyCom.module.css';
const MyComN = (probs) => {



    return (
        <>
        <div className={style.numDiv}>{probs.n}</div>
        <div className={style.numDiv}>{probs.n1}</div>     
        </>
    );
}

export default MyComN;