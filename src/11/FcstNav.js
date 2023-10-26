import { GoHome } from "react-icons/go";
import { Link } from "react-router-dom";
import { WiDayFog } from "react-icons/wi";

const FcstNav = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-2 bg-slate-100">
      <ul>
        <li><strong>기상청 예보<WiDayFog/></strong></li>
      </ul>
      <ul>
        <Link to='/'>
            <GoHome className="text-2xl"/>
        </Link>
      </ul>
    </nav>
  )
}

export default FcstNav