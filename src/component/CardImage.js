import React from "react"
import { useSelector } from "react-redux"

const CardImage = () => {
  const { cardReducer } = useSelector((cardState) => cardState)

  return (
    <div>
      <img src={cardReducer.data.avatar} alt="" />
    </div>
  )
}

export default CardImage
