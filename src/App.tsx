import classes from './App.module.css';
import Card from './Components/Card';
import { data, ICatProduct } from './data';

const App = () => {
  const productCards = () => data.map((card: ICatProduct) => <Card key={card.id} {...card} />);

  const { container, title, card__wrapper } = classes;
  return (
    <main className={container}>
      <div className={title}>Ты сегодня покормил кота?</div>
      <div className={card__wrapper}>{productCards()}</div>
    </main>
  );
};

export default App;
