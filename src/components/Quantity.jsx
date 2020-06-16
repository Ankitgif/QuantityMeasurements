import React, { Component } from 'react';
import Header from './Header';
import SubHead from './SubHead';
import ButtonList from './ButtonList';
import SecondSubHead from './SecondSubHead';
import '../css/styles.css';
//import InputBox from './InputBox';
import InputBox from './Converter';

class Quantity extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="content">
                    <SubHead />
                    <ButtonList />
                    <SecondSubHead />
                    <InputBox />
                </div>
            </div>
        )
    }
}


export default Quantity