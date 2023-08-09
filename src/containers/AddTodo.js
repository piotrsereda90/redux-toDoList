import { useDispatch } from 'react-redux';
import React,{ useState } from 'react';
import { addTodo } from '../actions/todo.actions';

const AddTodo = () => {

    const [inputValue, setInputValue] = useState("")
    const dispatch = useDispatch()

    const handleInputChange = (e) => setInputValue(e.target.value);
    
    const handleSubmit = () => {
        if(inputValue) {
            dispatch(addTodo(inputValue));
            setInputValue("")
        } else{
            alert('Enter some text')
        }
    }
    
    return(
        <div>
            <input onChange={handleInputChange} type="text" value={inputValue}/>
            <button onClick={handleSubmit} type="submit">Add task</button>
        </div>
    )
}

export default AddTodo;