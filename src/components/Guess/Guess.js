import React from 'react';
import { range } from '../../utils';

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(0, 5).map(index => {
        if(guess) {
          return <span className={`cell ${guess[index].status}`} key={index}>{guess[index].letter}</span>
        } else {
          return <span className="cell" key={index}></span>
        }
      }
      )}
    </p>
  );
}

export default Guess;
