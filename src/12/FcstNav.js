import { BsFillHouseHeartFill, BsBrightnessHighFill } from "react-icons/bs";
import { Link } from "react-router-dom"; 

const FcstNav = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-2 bg-slate-100">
      <ul>
        <li className="flex font-bold text-2xl">
          <BsBrightnessHighFill className="text-orange-500"/> 기상청 예보
        </li>
      </ul>
      <ul>
        <li>
          <Link to='/'>
          <BsFillHouseHeartFill  className="text-4xl font-bold text-sky-500"/>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default FcstNav