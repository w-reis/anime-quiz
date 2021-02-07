/* eslint-disable react/prop-types */
import React from 'react';
import Widget from '../Widget';

function ResultWidget({ results }) {
  return (
    <Widget>
      <Widget.Header>
        Resultados
      </Widget.Header>

      <Widget.Content>
        <p>
          {`Você acertou ${
            results.reduce((currentSum, currentResult) => {
              const isHit = currentResult === true;
              if (isHit) {
                return currentSum + 1;
              }
              return currentSum;
            }, 0)}
            perguntas`}
        </p>
        <ul>
          {results.map((result, index) => (
            <li key={`result_${result}`}>
              {`#${index + 1} resultado: 
              ${result === true ? 'Acertou' : 'Errou'}`}
            </li>
          ))}
        </ul>
      </Widget.Content>
    </Widget>
  );
}

export default ResultWidget;
