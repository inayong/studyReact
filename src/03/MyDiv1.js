import MyDiv11 from "./MyDiv11";

// const MyDiv1 = (probs) => {
    const MyDiv1 = ({n}) => {

    return (
        <>
        <div>MyDiv1</div>
        {/* <MyDiv11 n1 = {probs.n}/> */}
        <MyDiv11 n1 = {n}/>
        </>
    );
}

export default MyDiv1;