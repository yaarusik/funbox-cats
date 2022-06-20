import classes from './index.module.css';
import { ICircle } from './types';

const Circle = ({ count, isHover, isDisable }: ICircle) => {
  const { circle, weight, format, circle__active, circle__disable } = classes;
  return (
    <div className={`${circle} ${isHover && circle__active} ${isDisable && circle__disable}`}>
      <div className={weight}>{count}</div>
      <div className={format}>кг</div>
    </div>
  );
};

export default Circle;
