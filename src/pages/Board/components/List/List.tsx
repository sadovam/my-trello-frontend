import React, { FC, ReactElement } from 'react';
import { ICard } from '../../../../common/interfaces/ICard';
import { IList } from '../../../../common/interfaces/IList';
import { Card } from '../Card/Card';

function makeCardList(cards: ICard[]): ReactElement[] {
  return cards.map((card) => <Card key={card.id.toString()} title={card.title} />);
}

export const List: FC<IList> = ({ title, cards }): ReactElement => (
  <section>
    <h2>{title}</h2>
    <ul>{makeCardList(cards)}</ul>
    <button>Додати картку</button>
  </section>
);
