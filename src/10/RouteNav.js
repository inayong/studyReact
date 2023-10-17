import { Link } from "react-router-dom"

const RouteNav = () => {
  return (
    <nav>
  <ul>
    <li><strong>라우팅 연습</strong></li>
  </ul>
  <ul>
    <li><Link to='/' role="button">Home</Link></li>
    <li><Link to='/page1/1' role="button">Page1</Link></li>
    <li><Link to='/page2?item=2' role="button">Page2</Link></li>
  </ul>
</nav>
  )
}

export default RouteNav