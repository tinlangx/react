import React from 'react'
import "./style.css";

const CardItem = (props) => {

  const { name, learningclass, slogan } = props;

  return (
    <div className='card-item'>
      <p>Tôi tên: {name}</p>
      <p>Học lớp: {learningclass}</p>
      <p>{slogan}</p>
    </div>
  );
};

export default CardItem;