import React from "react"

export default function WithProps(props) {
    console.log(props)
    return (
        <div>
            <h2>Parm 1: { props.props1 }</h2>
            <h3>Parm 2: { props.props2 }</h3>
        </div>
    )
}