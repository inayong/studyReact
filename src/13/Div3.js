
import ButtonBlue from "../comm/ButtonBlue";

const Div3 = ({n, setN}) => {

    const handleUp = () => {
        setN(n+1);
    }
    const handleDown = () => {
        setN(n-1);
    }


  return (
    <main className="container bg-slate-200 m-2 p-10 rounded-2xl">
      <h1 className="text-rose-200">Div3</h1>
      <div className="grid grid-cols-2 gap-4">
          <div><ButtonBlue caption={'증가'} handleClick={handleUp}/></div>
          <div><ButtonBlue caption={'감소'} handleClick={handleDown}/></div>
      </div>
    </main>
  )
}

export default Div3