import React, { Component } from 'react';

class ConvertVolume extends Component {
    constructor(props){
        super(props)
        this.state = {
            quantities: ['Litres','Millilitres','Gallons'],
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
        if(this.state.base==='Litres' && this.state.convertTo==='Millilitres'){
            const result = input/0.0010000;
            this.setState({
                result
            })
        }
        if(this.state.base==='Litres' && this.state.convertTo==='Gallons'){
            const result = input* 0.21997;
            this.setState({
                result
            })
        }
        if(this.state.base==='Millilitres' && this.state.convertTo==='Litres'){
            const result = input/1000;
            this.setState({
                result
            })
        }
        if(this.state.base==='Millilitres' && this.state.convertTo==='Gallons'){
            const result = input*0.0002641721 ;
            this.setState({
                result
            })
        }
        if(this.state.base==='Gallons' && this.state.convertTo==='Litres'){
            const result = input/0.26417;
            this.setState({
                result
            })
        }
        if(this.state.base==='Gallons' && this.state.convertTo==='Millilitres'){
            const result = input/0.00026417;
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
export default ConvertVolume