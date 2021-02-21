import React, { FC, ReactElement } from 'react';

interface CardProps {
  title: string;
}

export const Card: FC<CardProps> = ({ title }): ReactElement => <li className="card__item">{title}</li>;
