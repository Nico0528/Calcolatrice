import {useDispatch, useSelector } from 'react-redux'
import { displayZero } from '../stateMenegment/slices/displaySlice'
import '../style/calculator.css'
import { add, piu, meno, per, diviso, cancel, equal } from '../stateMenegment/slices/displaySlice'

export const Calculator = () => {
    const display = useSelector(displayZero)
    const dispatch = useDispatch()
    return(<>
        <div className="calcolatrice">
            <p className="display">{display}</p>
            <div className="tastiera">
                <button onClick={() => dispatch(add('7')) } className="btn">7</button>
                <button onClick={() => dispatch(add('8')) } className="btn">8</button>
                <button onClick={() => dispatch(add('9')) } className="btn">9</button>
                <button onClick={() => dispatch(diviso()) } className="btn">÷</button>
                <button onClick={() => dispatch(add('4')) } className="btn">4</button>
                <button onClick={() => dispatch(add('5')) } className="btn">5</button>
                <button onClick={() => dispatch(add('6')) } className="btn">6</button>
                <button onClick={() => dispatch(per()) } className="btn"><p>*</p></button>
                <button onClick={() => dispatch(add('1')) } className="btn">1</button>
                <button onClick={() => dispatch(add('2')) } className="btn">2</button>
                <button onClick={() => dispatch(add('3')) } className="btn">3</button>
                <button onClick={() => dispatch(meno()) } className="btn">-</button>
                <button onClick={() => dispatch(add('0')) } className="btn">0</button>
                <button onClick={() => dispatch(equal()) } className="btn">=</button>
                <button onClick={() => dispatch(cancel()) } className="btn">c</button>
                <button onClick={() => dispatch(piu()) } className="btn">+</button>
            </div>
        </div>
    </>)
}