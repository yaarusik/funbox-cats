import classes from './App.module.css';
import Card from './Components/Card';

const App = () => {
  const { container, title, card__wrapper } = classes;
  return (
    <main className={container}>
      <div className={title}>Ты сегодня покормил кота?</div>
      <div className={card__wrapper}>
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
};

export default App;
