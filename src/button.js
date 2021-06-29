const Button = ({change}) => {
    return(
        <button className='change' type='button' onClick={() => {change()}}>New quote</button>
    )
}

export default Button;