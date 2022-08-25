import React from "react"
import { useSelector } from "react-redux"

const CardName = () => {
  const { data } = useSelector((state) => state)

  return (
    <div>
      <h2>{data.name}</h2>
    </div>
  )
}

export default CardName
