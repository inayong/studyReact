import { BrowserRouter, Routes, Route } from "react-router-dom";
import FcstMain from "./FcstMain";
import FcstNav from "./FcstNav";
// import Ultra from "./Ultra";
import FcstFetch from "./FcstFetch";


const Fcst = () => {
  return (
    <BrowserRouter>
        <main className="container">
        <FcstNav />
        <Routes>
            <Route path="/" element={<FcstMain />} />
            <Route path="/fetch/:dt/:area/:x/:y/:m" element={<FcstFetch />} />
        </Routes>
        </main>
    </BrowserRouter>
  )
}

export default Fcst