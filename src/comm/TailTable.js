import React from 'react'

const TailTable = ({tbitem}) => {
    const th = tbitem['th'].map((item, idx) => 
        <th key={`th${idx}`}>{item}</th>
    );
    const tr = tbitem['tr'].map((item, idx) => 
        <tr key={`tr${idx}`}>
            {item.map((i, idx) => <td key={`td${idx}`}>{i}</td>)}
        </tr>
    );
    
  return (
    <table className="table-auto">
        <thead>
            <tr>
                {th}
            </tr>
        </thead>
        <tbody>
            {tr}
        </tbody>
    </table>
  )
}

export default TailTable