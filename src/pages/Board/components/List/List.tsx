import React from 'react';
import { IList } from '../../../../common/interfaces/IList';
import Card from '../Card/Card';

export default function List(props: IList): JSX.Element {
  const { title, cards } = props;
  const cardsList = cards.map((card) => <Card title={card.title} />);
  return (
    <div>
      <h2>{title}</h2>
      {cardsList}
    </div>
  );
}
