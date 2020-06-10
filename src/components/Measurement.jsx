import React ,{ Component } from 'react';

class Measurement extends Component {
    render() {
        return(
            <div className="measurement_style">
                <button id="length"><img src="https://img.icons8.com/ultraviolet/48/000000/length.png"/>Length</button>
                <button id="temperature"><img src="https://img.icons8.com/color/48/000000/temperature.png"/>Temperature</button>
                <button id="volume"><img src="https://img.icons8.com/dusk/48/000000/volume.png"/>Volume</button>
            </div>
        )
    }
}
export default Measurement