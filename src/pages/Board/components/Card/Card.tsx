import React from 'react';

export default function Card(props: { title: string }): JSX.Element {
  const { title } = props;
  return <h3>{title}</h3>;
}
