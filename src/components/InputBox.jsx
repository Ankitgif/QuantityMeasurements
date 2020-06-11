import React, { Component } from 'react';

class InputBox extends Component {
    render() {
        return (
            <div className="inputbox">
                <div className="boxone">
                    <input type="" value="1" id="inputone"></input>
                    <span>
                        <select className="selectone">
                            <option selected="1">Meters</option>
                            <option>Kilometre</option>
                            <option>Centimetres</option>
                            <option>Milimetre</option>
                            <option>Micrometre</option>
                            <option>Mile</option>
                            <option>Foot</option>
                        </select>
                    </span>
                </div>
                <div className="boxtwo">
                    <input type="" value="100" id="inputtwo"></input>
                    <span>
                        <select className="selecttwo">
                            <option selected="100">Centimeters</option>
                            <option>Kilometre</option>
                            <option>Metres</option>
                            <option>Centimetres</option>
                            <option>Milimetre</option>
                            <option>Micrometre</option>
                            <option>Mile</option>
                            <option>Foot</option>
                        </select>
                    </span>
                </div>
            </div>
        )
    }
}
export default InputBox