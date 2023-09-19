import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import { checkGuess } from '../../game-helpers.js';


function Game() {
  const [answer, setAnswer] = useState(() => {
    // Pick a random word on every pageload.
    const answer = sample(WORDS);
    // To make debugging easier, we'll log the solution in the console.
    console.info({ answer });
    return answer;
  })
  const [userWin, setUserWin] = useState(false);
  const [guesses, setGuesses] = useState([]);

  function addGuess(guess, answer) {
    const guessStatus = checkGuess(guess, answer);
    setUserWin(guessStatus.every(g => g.status === 'correct'));
    setGuesses([...guesses, guessStatus]);
  }
  const restartGame = () => {
    const answer = sample(WORDS);
    setAnswer(answer);
    console.info({ answer });

    setUserWin(false);
    setGuesses([]);
  }

  return <>
    <GuessResults guesses={guesses} />
    <GuessInput addGuess={addGuess} answer={answer} disable={userWin || guesses.length >= 6} />
    {userWin ? (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {`${guesses.length} ${guesses.length > 1 ? 'guesses' : 'guess'}`}</strong>.
        </p>
        <button onClick={restartGame}>Restart</button>
      </div>
    )
      : <></>
    }
    {!userWin && guesses.length >= 6 ? (
      <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        <button onClick={restartGame}>Restart</button>
      </div>
    ) : undefined}

  </>;
}

export default Game;
