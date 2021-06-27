import { useState } from 'react'
import Data from './Quots.json'

let randomNumber = () =>{
    let number = Math.floor(Math.random() * 102) + 1;
    return number;
}

const Quots = () => {
    const [state, setState] = useState(randomNumber());
    let phrase = Data.quotes;

    return(
        <div className='quote-box'>
            <h4>"{phrase[state].quote}"</h4>
            <p>"{phrase[state].author}"</p>
            <button className='change' type='button' onClick={() => {setState(randomNumber())}}>New quote</button>
        </div>
    )
}

export default Quots;