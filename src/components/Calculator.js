import React, { useState } from 'react'

const Calculator = () => {
    const[result, setResult] = useState(0)
  return (
    <div>
        <h1>Simples working calculator</h1>
        <h3>{result}</h3>
        <input/>
        <div>
            <button>add</button>
            <button>substract</button>
            <button>multiply</button>
            <button>divide</button>
            <button>reset input</button>
            <button>reset result</button>
        </div>
    </div>
  )
}

export default Calculator