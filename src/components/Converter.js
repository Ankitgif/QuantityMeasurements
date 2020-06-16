import React, { Component } from 'react';

class InputBox extends Component {
    constructor(props){
        super(props)
        this.state = {
            quantities: ['Metres','Kilometre','Centimetres','Milimetre','Micrometre','Mile','Foot'],
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

    // handleResult = (event) => {
    //     this.setState({
    //         result: event.target.value
    //     })
    // }

    calculate = () => {
        const input = this.state.input;
        console.log(input)
        if(this.state.base==='Kilometre' && this.state.convertTo==='Metres'){
            const result = input*1000;
            this.setState({
                result
            })
        }
        if(this.state.base==='Metres' && this.state.convertTo==='Kilometre'){
            const result = input/1000;
            console.log(result)
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
                    <input type="" value={result} id="inputtwo" onChange={this.handleInput} ></input>
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
export default InputBox