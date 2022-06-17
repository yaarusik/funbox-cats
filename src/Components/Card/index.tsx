import React from 'react';
import Circle from '../Circle';

import classes from './index.module.css';
const Card = () => {
  const { card, body, subtitle, title, product, description, question, link, wrapper, point } =
    classes;
  return (
    <div className={wrapper}>
      <div className={card}>
        <div className={body}>
          <div className={subtitle}>Сказочное заморское яство</div>
          <div className={title}>Нямушка</div>
          <div className={product}>с фуа-гра</div>
          <div className={description}>10 порций мышь в подарок</div>
          <Circle />
        </div>
      </div>
      <div className={question}>
        Чего сидишь? Порадуй котэ,{' '}
        <a className={link} href="#">
          купи
        </a>
        <span className={point}>.</span>
      </div>
    </div>
  );
};

export default Card;
