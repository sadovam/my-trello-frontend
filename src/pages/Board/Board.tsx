import React from 'react';
import { IList } from '../../common/interfaces/IList';
import List from './components/List/List';

interface BoardProps {
  num?: string;
}

interface BoardState {
  title: string;
  lists: IList[];
}

export default class Board extends React.Component<BoardProps, BoardState> {
  constructor(props: BoardProps) {
    super(props);

    this.state = {
      title: 'Моя тестовая доска',
      lists: [
        {
          id: 1,
          title: 'Планы',
          cards: [
            { id: 1, title: 'помыть кота' },
            { id: 2, title: 'приготовить суп' },
            { id: 3, title: 'сходить в магазин' },
          ],
        },
        {
          id: 2,
          title: 'В процессе',
          cards: [{ id: 4, title: 'посмотреть сериал' }],
        },
        {
          id: 3,
          title: 'Сделано',
          cards: [
            { id: 5, title: 'сделать домашку' },
            { id: 6, title: 'погулять с собакой' },
          ],
        },
      ],
    };
  }

  render(): JSX.Element {
    const { title, lists } = this.state;
    const listComponents = lists.map((l) => <List id={l.id} title={l.title} cards={l.cards} />);
    return (
      <div>
        <h1>{title}</h1>
        {listComponents}
      </div>
    );
  }
}
