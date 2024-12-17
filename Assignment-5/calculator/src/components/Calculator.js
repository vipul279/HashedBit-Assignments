import React, { useState } from 'react';
import './Calculator.css';

export default function Calculator () {

    const [display,setdisplay]=useState('Press buttons to begin');
    
    const handleClick=(value)=>{
        if(value==="AC"){
            setdisplay('Press buttons to begin');
        }
        else if(value==="C"){
            setdisplay(display=== "Press buttons to begin"?display:display.slice(0,-1));
        }
        else if(value==="="){
            try{
                setdisplay(eval(display));
            }
            catch{
                setdisplay("Error");
            }
           
        }
        else{
            setdisplay(display==="Press buttons to begin" ? value : display+value);
        }

    }
    

    return (
        <div className='calculatorbody' >
            <div className='calculator'>
                <div className='display'>
                    {display} 
                </div>
                <div className='numbers'>
                    <button onClick={() => handleClick("AC")}>AC</button>
                    <button onClick={() => handleClick("C")}>C</button>
                    <button onClick={() => handleClick("*")}>x</button>
                    <button onClick={() => handleClick("/")}>/</button>
                    <button onClick={() => handleClick("7")}>7</button>
                    <button onClick={() => handleClick("8")}>8</button>
                    <button onClick={() => handleClick("9")}>9</button>
                    <button onClick={() => handleClick("-")}>-</button>
                    <button onClick={() => handleClick("4")}>4</button>
                    <button onClick={() => handleClick("5")}>5</button>
                    <button onClick={() => handleClick("6")}>6</button>
                    <button onClick={() => handleClick("+")}>+</button>
                    <button onClick={() => handleClick("3")}>3</button>
                    <button onClick={() => handleClick("2")}>2</button>
                    <button onClick={() => handleClick("1")}>1</button>
                    <button style={{backgroundColor: 'orange'}} onClick={() => handleClick("=")}>=</button>
                    <button onClick={() => handleClick("0")}>0</button>
                    <button onClick={() => handleClick(".")}>.</button>   
                    
                </div>
            </div>
        </div>
    )
}
