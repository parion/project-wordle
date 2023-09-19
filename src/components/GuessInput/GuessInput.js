import React, { useState } from 'react';

function GuessInput({ addGuess, answer, disable }) {
  const [guess, setGuess] = useState("");
  function guessSubmission(e) {
    e.preventDefault();
    addGuess(guess, answer);
    setGuess("");
  }
  return <form className="guess-input-wrapper" onSubmit={(e) => guessSubmission(e)}>
    <label htmlFor="guess-input">Enter guess:</label>
    <input
      id="guess-input"
      type="text"
      disabled={disable}
      value={guess}
      minLength={5}
      maxLength={5}
      pattern="[a-zA-Z]{5}"
      onChange={(e => setGuess(e.target.value.toUpperCase()))}
    />
  </form>;
}

export default GuessInput;
