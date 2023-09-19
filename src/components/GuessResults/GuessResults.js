import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '/src/constants.js';
import Guess from '../Guess/Guess';

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} word={guesses[num]} />
      ))}
    </div>
  );
}

export default GuessResults;
