import React, { Component } from 'react';
import Buttonlist from './ButtonList';


function buttoncard(props) {
    return (
        <div className="measurement_style" >
            <button id={props.id}>
                <img src={props.image} alt="measure" />
                {props.name}
            </button>
        </div>

    )
}
export default buttoncard