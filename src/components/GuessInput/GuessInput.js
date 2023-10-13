import React from 'react';

function GuessInput({ handleNewGuess, isDisabled }) {
  const [guess, setGuess] = React.useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    handleNewGuess(guess)
    setGuess('')
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={handleSubmit}>

      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        title="Input should be exactly 5 letters long"
        disabled={isDisabled}
        value={guess}
        maxLength={5}
        pattern='[A-Za-z]{5}'
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase())
        }} />
    </form>
  );
}

export default GuessInput;
