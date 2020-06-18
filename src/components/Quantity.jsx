import React, { Component } from 'react';
import Header from './Header';
import SubHead from './SubHead';
import ButtonList from './ButtonList';
import SecondSubHead from './SecondSubHead';
import '../css/styles.css';
//import InputBox from './InputBox'
import InputBox from './Converter'
import DisplayButtons from './DisplayButtons';
import ConvertTemperature from './ConvertTemp';
import ConvertVolume from './ConvertVolume';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ConvertLength from './ConvertLength';


class Quantity extends Component {
    render() {
        return (
            <BrowserRouter>
            <div>
                <Header />
                <div className="content">
                    <SubHead />
                    <ButtonList /> 
                 {/* <DisplayButtons /> */} 
                    <SecondSubHead />
                   {/* <InputBox /> */}
                  {/*  <Route path="/inputbox" exact component={Converter} /> */}
                  <Route path="/" exact component={ConvertLength} />
                  <Route path="/convertlength" exact component={ConvertLength} />
                    <Route path="/converttemp" exact component={ConvertTemperature} />
                    <Route path="/convertvolume" exact component={ConvertVolume} />
                    
                </div>
            </div>
            </BrowserRouter>
        )
    }
}


export default Quantity