"use client";

import { useState } from 'react';

function Box() {
    const [bgColor, setBgColor] = useState("gray");
    const [value, setValue] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [submitted, setSubmitted] = useState(false);

    function handleClick() {
        console.log("Box was clicked");
        if (submitted === true) {
            setBgColor(bgColor === "gray" ? "blue" : "gray");
        }
    }

    function handleChange(event) {
        setInputValue(event.target.value);
    }

    function handleSubmit() {
        setValue(inputValue);
        setSubmitted(true);
    }

    return (
        <div 
            className="box"
            style={{backgroundColor: bgColor}}
            onClick={handleClick}>
            {value}
            {!submitted && (
                <>
                    <input
                        className='search'
                        type="text" 
                        value={inputValue} 
                        onChange={handleChange} 
                        style={{color: "black"}}
                    />
                    <button onClick={handleSubmit} className='submit'>Submit</button>
                </>
            )}
        </div>
    );
}

export default function Bingo() {
    return (
        <div className='view'>
            <h1 className='bighead'>SuperBowl Bingo!</h1>
            <div className='row'>
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
            </div>
            <div className='row'>
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
            </div>
            <div className='row'>
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
            </div>
            <div className='row'>
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
            </div>
            <div className='row'>
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
            </div>
        </div>
    );
}