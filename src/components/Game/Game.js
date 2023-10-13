import React from 'react';

import { checkGuess } from '../../game-helpers'
import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const WinBanner = ({ nbTries }) => (
  <div className="happy banner">
    <p>
      <strong>Congratulations!</strong> Got it in{' '}
      <strong>{nbTries} guesses</strong>.
    </p>
  </div>
)

const LoseBanner = () => (
  <div className="sad banner">
    <p>Sorry, the correct answer is <strong>LEARN</strong>.</p>
  </div>
)

function Game() {
  const [guesses, setGuesses] = React.useState([])

  const [gameStatus, setGameStatus] = React.useState('running')

  const handleNewGuess = (newGuess) => {
    if(newGuess === answer) {
      setGameStatus('won')
    } else if(guesses.length >= NUM_OF_GUESSES_ALLOWED - 1) {
      setGameStatus('lost')
    }

    setGuesses([...guesses, checkGuess(newGuess, answer)])
  }

  const isGameFinished = gameStatus !== 'running'

  return (
    <>
      <GuessList guesses={guesses}></GuessList>
      <GuessInput handleNewGuess={handleNewGuess} isDisabled={isGameFinished}></GuessInput>
      {gameStatus === 'won' ?? <WinBanner nbTries={guesses.length}/>}
      {gameStatus === 'lost' ?? <LoseBanner/>}
      
    </>
  );
}

export default Game;
