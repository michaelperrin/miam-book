import React from 'react';
import { parse } from 'iso8601-duration';

type Props = {
  preparationTime: string,
  cookingTime: string,
  totalTime: string,
};

const PreparationTimes = ({ preparationTime, cookingTime }: Props) => {
  return (
    <ul className="prepartion-times">
      {preparationTime && (
        <li>Préparation : {parse(preparationTime).minutes} min.</li>
      )}

      {cookingTime && (
        <li>Cuisson : {parse(cookingTime).minutes} min.</li>
      )}
    </ul>
  );
}

export default PreparationTimes;
