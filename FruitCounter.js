import {React, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function FruitCounter(props){
    let MyStyle={
        textAlign:"center",
        color: 'white',}
    let [count, setCount] = useState(0);
    let text =props.text;
    function increment(){
        setCount (count+1);
    };
    function decrement (){
        setCount(count > 0 ? count - 1 : 0);
    };
    function handleInputChange(e){
        let value = parseInt(e.target.value,10);
        setCount(count < 0 || isNaN(value) ? 0 : value )
    }
    return <div>
        <h1 style={MyStyle}> {text} : {count}</h1>
        <Button variant="outline-success" onClick={increment}>+</Button>
        <Button variant="outline-danger" onClick={decrement}>-</Button>
        <input 
            type="text" 
            value={count}
            onChange={handleInputChange}/>
        </div>
}
export default FruitCounter;