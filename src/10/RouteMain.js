import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteHome from "./RouteHome";
import RoutePage1 from "./RoutePage1";
import RoutePage2 from "./RoutePage2";
import RouteNav from "./RouteNav";
const RouteMain = () => {
  return (
    <BrowserRouter>
        <main className="container">
        <section>
            <h1 className="text-xl font-bold text-center mx-15 my-8">react-router-dom으로 라우팅</h1>
            <RouteNav />
        </section>
        <Routes>
            <Route path="/" element={<RouteHome />} />
            <Route path="/page1/:item" element={<RoutePage1 />} />
            <Route path="/page2" element={<RoutePage2 />} />
        </Routes>
        </main>
    </BrowserRouter>

  )

}

export default RouteMain;