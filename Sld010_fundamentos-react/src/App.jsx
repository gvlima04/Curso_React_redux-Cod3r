import React from "react";
import './index.css'

import Random from "./components/basics/Random";
import WithProps from "./components/basics/WithProps";
import First from './components/basics/First'


export default () => (
    <div>
        <Random min = {1} max = {50}></Random>
        <WithProps props1="Hello" props2="World!!">
        </WithProps>
        <First></First>
    </div>
)



