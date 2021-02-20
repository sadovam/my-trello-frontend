import React from 'react';
// import { ICard } from '../../../../common/interfaces/ICard';
import { IList } from '../../../../common/interfaces/IList';

export default function List(props: IList): JSX.Element {
  const { title } = props;
  return <h2>{title}</h2>;
}
