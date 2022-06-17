import classes from './index.module.css';

const Circle = () => {
  const { circle, weight, format } = classes;
  return (
    <div className={circle}>
      <div className={weight}>2</div>
      <div className={format}>кг</div>
    </div>
  );
};

export default Circle;
