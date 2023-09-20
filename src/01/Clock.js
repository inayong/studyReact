// import logo from '../logo.svg';
import Clockimage from "./Clockimage";
import Clocktime from "./Clocktime";
import MyComN from "../03/MyComN";

const Clock = () => {

    return (
        <div className="App">
            <header className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <Clockimage />
                {/* <p>
                    Hello React!!
                </p>
                <div>현재시간 : {new Date().toLocaleTimeString()}</div> */}
                <Clocktime />
                <MyComN />
            </header>
        </div>
    );
}

export default Clock;