import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import Guess from '../Guess/Guess';

function GuessList({ guesses }) {
  console.log(guesses)
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map(index => (
        <Guess guess={guesses[index]} key={index}></Guess>
      ))}
    </div>
  );
}

export default GuessList;
