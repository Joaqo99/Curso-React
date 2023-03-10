import { useState } from 'react'
import PropTypes from "prop-types";

const CounterApp = ({value}) => {

    const [ counter, setCounter ] = useState(0)

    const handleAdd = () => {
        setCounter(counter + 1)
    }
    const handleSubstract = () => {
        setCounter(counter - 1)
    }
    const handleReset = () => {
        setCounter(0)
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>

            <button onClick={ handleAdd }>
                +1
            </button>
            <button onClick={ handleSubstract }>
                -1
            </button>
            <button onClick={ handleReset }>
                reset
            </button>
        </>
    );
}

export default CounterApp;

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}