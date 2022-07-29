import { useDispatch, useSelector } from "react-redux"
import { selectCount } from "../stateMenegment/slices/counterSlice"
import { incrementa, decrementa } from "../stateMenegment/slices/counterSlice"




export const First = () => {
    const counter = useSelector(selectCount)
    const dispatch = useDispatch()
    return(<>
        <div>{counter}</div>
        <button onClick={() => {dispatch(incrementa())}}>clicca +</button>
        <button onClick={() => {dispatch(decrementa())}}>clicca -</button>
    </>)
}