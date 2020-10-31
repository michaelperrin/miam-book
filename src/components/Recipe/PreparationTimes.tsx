import React from 'react';
import { parse } from 'iso8601-duration';

type Props = {
  preparationTime: string,
  cookingTime: string,
  totalTime: string,
};

const PreparationTimes = ({ preparationTime, cookingTime, totalTime }: Props) => {
  return (
    <ul>
      <li>Preparation: {parse(preparationTime).minutes}</li>
      <li>Cooking: {parse(cookingTime).minutes}</li>
      <li>Total: {parse(totalTime).minutes}</li>
    </ul>
  );
}

export default PreparationTimes;
