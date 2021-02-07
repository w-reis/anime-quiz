/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

import Head from 'next/head';

import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import LoadingWidget from '../src/components/LoadingWidget';
import QuestionWidget from '../src/components/QuestionWidget';
import GitHubCorner from '../src/components/GitHubCorner';

import db from '../db.json';

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizPage() {
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const question = db.questions[0];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questionIndex = currentQuestion;
  const totalQuestions = db.questions.length;

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  }, []);

  const handleSubmit = () => {
    const nextQuestion = questionIndex + 1;

    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(questionIndex + 1);
    } else {
      setScreenState(screenStates.RESULT);
    }
  };

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Anime Quiz - Quiz da Alura</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.QUIZ && (
        <QuestionWidget
          question={question}
          totalQuestions={totalQuestions}
          questionIndex={questionIndex}
          onSubmit={handleSubmit}
        />
        )}
        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && (<h1>Voce acertou X questoes</h1>)}
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/w-reis/anime-quiz" />
    </QuizBackground>
  );
}
