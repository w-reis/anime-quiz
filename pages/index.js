import React, { useState } from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

import Widget from '../src/components/Widget';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizInput from '../src/components/QuizInput';
import QuizButton from '../src/components/QuizButton';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

import db from '../db.json';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Anime Quiz - Quiz da Alura</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit={(e) => {
              e.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <QuizInput
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                placeholder="Digita seu nome aqui..."
              />
              <QuizButton type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </QuizButton>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>Em breve mais quizes para você se divertir...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/w-reis" />
    </QuizBackground>
  );
}
