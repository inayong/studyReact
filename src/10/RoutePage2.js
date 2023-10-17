import { useLocation } from "react-router-dom";
import queryString from "query-string";

const RoutePage2 = () => {
    const loc = useLocation().search;
    const item = queryString.parse(loc).item;
    const item2 = queryString.parse(loc).item2;

  return (
    <article>
        RoutePage2 : item = {item}, item2 = {item2}
    </article>
  )
}

export default RoutePage2