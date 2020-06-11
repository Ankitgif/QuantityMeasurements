import React, { Component } from 'react';
import Header from './Header';
import SubHead from './SubHead';
import Measurement from './Measurement';
import ButtonList from './ButtonList';
import SecondSubHead from './SecondSubHead';
import '../css/styles.css';

class Quantity extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="content">
                    <SubHead />
                    <ButtonList />
                    <SecondSubHead />
                </div>
            </div>
        )
    }
}


export default Quantity