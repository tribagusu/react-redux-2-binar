import React from "react"
import { useSelector } from "react-redux"

const CardName = () => {
  const { cardReducer } = useSelector((state) => state)

  return (
    <div>
      <h2>{cardReducer.data.name}</h2>
    </div>
  )
}

export default CardName
