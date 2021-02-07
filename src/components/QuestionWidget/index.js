/* eslint-disable react/prop-types */
import React from 'react';

import Widget from '../Widget';
import QuizButton from '../QuizButton';

function QuestionWidget({
  question,
  totalQuestions,
  questionIndex,
}) {
  const questionId = `question_${questionIndex}`;
  return (
    <Widget>
      <Widget.Header>
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>
      <img
        src={question.image}
        alt="Description"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
      />
      <Widget.Content>
        <h2>
          {question.title}
        </h2>
        <p>
          {question.description}
        </p>

        <form>
          {question.alternatives.map((
            alternative,
            alternativeIndex,
          ) => {
            const alternativeId = `alternative_${alternativeIndex}`;
            return (
              <Widget.Topic
                as="label"
                htmlFor={alternativeId}
              >
                <input
                  id={alternativeId}
                  type="radio"
                  name={questionId}
                />
                {alternative}
              </Widget.Topic>
            );
          })}
        </form>

        <QuizButton>
          Confirm
        </QuizButton>
      </Widget.Content>
    </Widget>
  );
}

export default QuestionWidget;
