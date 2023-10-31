
const TailSelect = ({id, opItem, handleChange}) => {
    const ops = opItem.map((item) => 
        <option key={item[0]} value={item[0]}>{item[1]}</option>
    );
  return (
    <select id={id} name={id} onChange={handleChange}>
        <option value=''>선택</option>
        {ops}
    </select>
  )
}

export default TailSelect