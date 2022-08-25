import React from "react"
import CardImage from "./CardImage"
import CardName from "./CardName"
import { useSelector } from "react-redux"

const Card = () => {
  const { authReducer } = useSelector((state) => state)
  // console.log("  🔸-> authReducer", authReducer.isLogin)

  return (
    <>
      {!!authReducer.isLogin ? (
        <>
          <CardName />
          <CardImage />
        </>
      ) : (
        <h2>anda belum minum</h2>
      )}
    </>
  )
}

export default Card
