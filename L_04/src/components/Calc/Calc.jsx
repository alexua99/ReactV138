import React, { useState } from "react";
import './style.css'

export default function Calc() {

    const [val, settVal] = useState('')

    let inp = React.createRef()
    let inp2 = React.createRef()

    function addUser() {
        console.log(inp.current.value);

        settVal(inp.current.value)
    }

    return (
        <div className="calc">

            <input type="text" ref={inp} />
            <input type="text" ref={inp2} />

            <button onClick={addUser}>res</button>

            = {val}
        </div>
    );
}


