import { useState } from "react"

export default function Counter() {

    const [count, setCount] = useState(0)


    function Plus() {
        setCount(count + 1)
    }
    function Minus() {
        setCount(count - 1)
    }

    return (
        <div>
            <button onClick={Minus}>+</button>
            {count}
            <button onClick={Plus}>+</button>
        </div>
    )
}