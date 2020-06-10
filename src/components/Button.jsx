import React, { Component } from 'react';
import Buttonlist from './ButtonList';

// class Button extends Component {
//     render() {
    function buttoncard(props){
        return (
            <div className="measurement_style" >
                    <button id={props.id}>
                        <img src={props.image} alt="measure"/>
                        {props.name}
                    </button>
                    </div>
            
        )
    }
    export default buttoncard
//}

    //         const buttonlistarray = [
    //             {
    //                 id: 1,
    //                 image: "https://img.icons8.com/ultraviolet/48/000000/length.png",
    //                 name: "Length"
    //             },
    //             {
    //                 id: 2,
    //                 image: "https://img.icons8.com/color/48/000000/temperature.png",
    //                 name: "Temperature"
    //             },
    //             {
    //                 id: 3,
    //                 image: "https://img.icons8.com/dusk/48/000000/volume.png",
    //                 name: "Volume"
    //             }
    //         ]

    //         const arraybuttoncard = buttonlistarray.map((buttoncard, i) => {
    //             return <Buttonlist key={i} id={buttonlistarray[i].id} image={buttonlistarray[i].image} name={buttonlistarray[i].name} />
    //         })

    //         return(
    //             <div className="measurement_style">
    //                 {arraybuttoncard}   
    //             </div>
    //         )
    //     }
    // }
   // export default Button