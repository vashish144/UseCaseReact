import React from 'react'

const WrapperDisplay = (props) => {
 const {data,index}=props
  return (
   <option value={data}>
          {data}
        </option>
  )
}

export default WrapperDisplay