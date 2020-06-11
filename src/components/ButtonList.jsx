import React from 'react';
import buttoncard from './Button';
import scale from '../assets/scale.png';
import hot from '../assets/hot.png';
import beaker from '../assets/beaker.png';

function buttonlist() {
  return (
    <div className="measurement_style">

      <button id="length"><img src={scale} alt="scale" id="scale" />Length</button>
      <button id="temperature"><img src={hot} alt="equipment to measure temperature" id="hot" />Temperature</button>
      <button id="volume"><img src={beaker} alt="equipment to measure volume" id="beaker" />Volume</button>

    </div>
  );
}
export default buttonlist