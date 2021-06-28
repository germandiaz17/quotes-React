import { useState } from 'react'
import Data from './Quots.json'

let randomNumber = () =>{
    let number = Math.floor(Math.random() * 102);
    return number;
}

const Quots = () => {
    const [state, setState] = useState(randomNumber());
    let phrase = Data.quotes;

    return(
        <div className='quote-box'>
            <div className='phrase'>
                <h4>"{phrase[state].quote}"</h4>
            </div>

            <div className='author'>
                <p>"{phrase[state].author}"</p>
            </div>
            <button className='change' type='button' onClick={() => {setState(randomNumber())}}>New quote</button>
        </div>
    )
}

export default Quots;