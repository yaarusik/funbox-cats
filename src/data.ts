export const data = [
  {
    id: 1,
    taste: 'с фуагра',
    portion: '10 порций',
    present: 'мышь в подарок',
    fullDescription: 'Печень утки разварная с артишоками.',
    count: `0,5`,
    isDisable: false,
  },
  {
    id: 2,
    taste: 'с рыбой',
    portion: '40 порций',
    present: '2 мыши в подарок',
    fullDescription: 'Головы щучьи с чесноком да свежайщая сёмгушка.',
    count: '2',
    isDisable: false,
  },
  {
    id: 3,
    taste: 'с курой',
    portion: '100 порций',
    present: '5 мышей в подарок заказчик доволен',
    fullDescription: 'Филе из цыплят с трюфелями в бульоне.',
    count: '5',
    isDisable: true,
  },
];

export const phrase = {
  title: 'Сказочное заморское яство',
  hoverTitle: 'Котэ не одобряет?',
};

export interface ICatProduct {
  taste: string;
  portion: string;
  present: string;
  id: number;
  count: string;
  fullDescription: string;
  isDisable: boolean;
}
