import React from 'react'
import "./style.css"
import CardItem from "../card-item";

const CardList = () => {
  return (
    <div className='card-list'>
      <CardItem name="Nguyen Van A" learningclass="Code React" slogan="Fullstack" />
      <CardItem name="Nguyen Van B" learningclass="Code React" slogan="Fullstack" />
      <CardItem name="Nguyen Van C" learningclass="Code React" slogan="Fullstack" />
    </div>
  )
}

export default CardList;