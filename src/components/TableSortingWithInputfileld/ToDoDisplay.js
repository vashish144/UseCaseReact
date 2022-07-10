import React from 'react'

const ToDoDisplay = (props) => {
 const {item,index,handleOnChage}=props
  return (
   <tr key={item._index}>
        <td>{index}</td>
        <td>{item.id}</td>
        <td>
          <input
            // value={data.value}
            onChange={(e) => handleOnChage(item, e)}
          />
        </td>
        <td>{item._time}</td>
      </tr>
  )
}

export default ToDoDisplay