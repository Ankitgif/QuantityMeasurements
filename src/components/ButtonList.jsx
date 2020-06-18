import React from 'react';
import buttoncard from './Button';
import scale from '../assets/scale.png';
import hot from '../assets/hot.png';
import beaker from '../assets/beaker.png';
import ConvertTemp from './ConvertTemp';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap'

function buttonlist() {
  return (
    <div className="measurement_style">

    <Link to="/ConvertLength"><Button id="length"><img src={scale} alt="scale" id="scale"/><a>Length</a></Button></Link>
    <Link to="/ConvertTemp"><Button id="temperature"><img src={hot} alt="equipment to measure temperature" id="hot" /><a>Temperature</a></Button></Link>
    <Link to="/ConvertVolume"><Button id="volume"><img src={beaker} alt="equipment to measure volume" id="beaker" /><a>Volume</a></Button></Link>

    </div>
  );
}
export default buttonlist