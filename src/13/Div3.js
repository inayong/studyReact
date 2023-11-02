import ButtonBlue from "../comm/ButtonBlue";

const Div3 = ({n, setN}) => {
    const handleUp = () => {
        setN(n+1);
    }
    const handleDown = () => {
        setN(n-1);
    }
  return (
    <div>
        Div3
        <ButtonBlue caption={'증가'} handleClick={handleUp}/>
        <ButtonBlue caption={'감소'} handleClick={handleDown}/>
    </div>
  )
}

export default Div3