import style from './Lotto.module.css';

// const LottoNums = (props) => {
const LottoNums = ({ns}) => {
    // console.log("nums=" , props.ns)
    console.log("LottoNums", ns)

    let n;
    let nsTag = ns.map((item, idx) => {//중괄호쓰면 리턴필요
        n = Math.floor(item / 10);
        
        return (
            idx === (ns.length - 1)
            ? <div key='nsplus' className={style.plus}> + </div>
            : <div key={'ns' + idx} className={style[`lottonum${n + 1}`]}>
                {item}
              </div>
        )
    });

    //배열 at() 으로 마지막 요소 가져오기 1이면 첫번째요소
    n = Math.floor(ns.at(-1) / 10);
    nsTag.push(
        <div key={'ns' + (ns.length - 1)} className={style[`lottonum${n + 1}`]}>
            {ns.at(-1)}
        </div>
    );



    return (
        <div className={style.lottobox}>
            {/* LottoNums */}
            {nsTag}
        </div>
    )
}

export default LottoNums;