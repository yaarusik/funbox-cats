import { useState } from 'react';
import { ICatProduct, phrase } from '../../data';
import Circle from '../Circle';
import classes from './index.module.css';

const Card = ({ portion, taste, present, count, fullDescription, isDisable }: ICatProduct) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [headline, setHeadline] = useState(phrase.title);

  const chooseCard = () => {
    setIsChecked(!isChecked);
  };

  const chooseLink = () => {
    setIsChecked((isChecked) =>
      ((checked) => {
        setIsHover(checked);
        return checked;
      })(!isChecked)
    );
  };

  const leaveCard = () => {
    if (isChecked) {
      setIsHover(true);
    } else {
      setIsHover(false);
    }
    setHeadline(phrase.title);
  };

  const cancelHover = () =>
    isChecked && isHover ? setHeadline(phrase.hoverTitle) : setHeadline(phrase.title);

  const {
    card,
    body,
    subtitle,
    title,
    product,
    description,
    wrapper,
    question,
    link,
    point,
    card__active,
    subtitle__active,
    card__disable,
  } = classes;

  const QuestionComponent = isHover ? (
    <div className={question}>{fullDescription}</div>
  ) : (
    <div className={question}>
      Чего сидишь? Порадуй котэ,{' '}
      <a className={link} onClick={chooseLink} href="#">
        купи.
      </a>
      <span className={point}>.</span>
    </div>
  );

  return (
    <div className={`${wrapper} ${isDisable && card__disable}`}>
      <div
        className={`${card} ${isHover && card__active}`}
        onMouseLeave={leaveCard}
        onMouseOver={cancelHover}
        onClick={chooseCard}
      >
        <div className={body}>
          <div className={`${subtitle} ${isHover && subtitle__active}`}>{headline}</div>
          <div className={title}>Нямушка</div>
          <div className={product}>{taste}</div>
          <div className={description}>{portion}</div>
          <div className={description}>{present}</div>
          <Circle isHover={isHover} isDisable={isDisable} count={count} />
        </div>
      </div>
      {isDisable ? (
        <div className={question}>Печалька, {taste} закончился.</div>
      ) : (
        QuestionComponent
      )}
    </div>
  );
};

export default Card;
