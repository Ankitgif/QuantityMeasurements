import React, { Component } from 'react';

class ConvertTemperature extends Component {
    constructor(props){
        super(props)
        this.state = {
            quantities: ['Celsius','Fahrenheit','Kelvin'],
            base: '',
            convertTo: '',
            input:'',
            result:''
        };
    }
   

    handleSelect = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        },
        this.calculate
        );
    };

    handleInput = (event) => {
        this.setState({
            input: event.target.value
            //result: event.target.value/1000
        },
        
        this.calculate
        )
    }

    calculate = () => {
        const input = this.state.input;
        console.log(input)
        if(this.state.base==='Celsius' && this.state.convertTo==='Fahrenheit'){
            const result = (this.state.input * 9/5)+32;
            this.setState({
                result
            })
        }
        if(this.state.base==='Celsius' && this.state.convertTo==='Kelvin'){
            const result = this.state.input +273.15;
            this.setState({
                result
            })
        }
        if(this.state.base==='Fahrenheit' && this.state.convertTo==='Kelvin'){
            const result = (this.state.input-32)*5/9+273.15;
            this.setState({
                result
            })
        }
        if(this.state.base==='Fahrenheit' && this.state.convertTo==='Celsius'){
            const result = (this.state.input-32)*5/9;
            this.setState({
                result
            })
        }
        if(this.state.base==='Kelvin' && this.state.convertTo==='Celsius'){
            const result = this.state.input-273.15;
            this.setState({
                result
            })
        }
        if(this.state.base==='Kelvin' && this.state.convertTo==='Fahrenheit'){
            const result = (this.state.input-273.15)*9/5+32.00;
            this.setState({
                result
            })
        }
       
    } 

    render() {
        const { quantities, input, base, convertTo, result} = this.state
        return (
            <div className="inputbox">
                <div className="boxone">
                    <input type="" value={input} id="inputone" onChange={this.handleInput}></input>
                    <span>
                        <select name="base" value={base} onChange={this.handleSelect} className="selectone">
                            {quantities.map(quantity => (
                                <option key={quantity} value={quantity}>
                                    {quantity}
                                </option>
                            ))}
                        </select>
                    </span>
                </div>
                <div className="boxtwo">
                    <input type="" value={result} id="inputtwo" onChange={this.handleInput}></input>
                    <span>
                        <select
                        name="convertTo"
                        value={convertTo}
                        onChange={this.handleSelect}
                        className="selecttwo">
                        {quantities.map(quantity => (
                                <option key={quantity} value={quantity}>
                                    {quantity}
                                </option>
                            ))}
                        </select>
                    </span>
                </div>
            </div>
        )
    }
}
export default ConvertTemperature