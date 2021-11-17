import React from "react";

export default (props) => {
    console.log(props)
    const number = parseInt(Math.random() * (props.max-props.min)) + props.min
    
    return (<div>
        <p>O número sorteado foi: {number}</p>
    </div>)
}