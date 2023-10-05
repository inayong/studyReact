import style from "./Taccident.module.css";

const TaccidentNav = ({title, c, sel, setSel}) => { //probs
    // console.log("tn", c) //배열의 개수만큼 <li>만들어주면됨

    const handleClick = (item) => {
        setSel(item); //클릭을 하면 item을 바꿈
    }

    const liTag = c.map((item, idx) => 
        <li key={`li${idx}`}>
            <button 
            className={item ===sel ? style.bt1 : style.bt2} 
            onClick={() => handleClick(item) }>
                {item}
            </button>
        </li> 
    );
    return (
        <nav>
            <ul>
                <li><strong>{title}</strong></li>
            </ul>
            <ul>
                {liTag}
            </ul>
        </nav>
    )
}

export default TaccidentNav ;