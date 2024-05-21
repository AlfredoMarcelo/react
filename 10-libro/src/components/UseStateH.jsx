import React, { useEffect, useState } from 'react'

export const UseStateH = () => {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    console.log("se renderizo");
  })
    return (
      <>
        <div>
          <p>click realizados {count}</p>
          <button onClick={()=>setCount(count + 1)}>click</button>
        </div>
      </>
  )
}
