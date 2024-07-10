import React, { useState, useRef } from 'react'
import './Calculator.css'

const Calculator = () => {
    const inputRef = useRef(null)
    //const resultRef = useRef(null)
    const[result, setResult] = useState(0)
    const[inputState, setInputState] = useState("");
    const handleButtonReset = () => {
        setResult(0)
    }
    function add(e) {
        e.preventDefault();
        setResult((result)=> result + Number(inputRef.current.value))
    }

    function substract(e){
        e.preventDefault();
        setResult((result) => result - Number(inputRef.current.value))
    }

    function multiply(e){
        e.preventDefault();
        setResult((result)=> result * Number(inputRef.current.value))
    }

    function divide(e){
        e.preventDefault();
        setResult((result)=> result / Number(inputRef.current.value))
    }

    function resetInput(e){
        setInputState(e.target.value)
    }
  return (
    <div>
        <h1>Simplest working calculator</h1>
        <h3>{result}</h3>
        <input 
            pattern='[0-9]'
            ref={inputRef}
            className='loadNumber'
            type='number'
            value={inputState}
            onChange={resetInput}
        >
        
        </input>
        <div>
            <button onClick={add}>add</button>
            <button onClick={substract}>substract</button>
            <button onClick={multiply}>multiply</button>
            <button onClick={divide}>divide</button>
            <button onClick={()=>setInputState('')}>reset input</button>
            <button className='reset-result' onClick={handleButtonReset}>reset result</button>
        </div>
    </div>
  )
}

export default Calculator