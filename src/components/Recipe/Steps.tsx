import React from 'react';

type Props = {
  steps: Step[],
};

type Step = {
  title?: string;
  description: string;
};

const Steps = ({ steps }: Props) => {
  return (
    <ul>
      {steps.map((step: Step) => (
        <li>
          {step.title && (
            <h3>{step.title}</h3>
          )}

          {step.description}
        </li>
      ))}
    </ul>
  );
}

export default Steps;
