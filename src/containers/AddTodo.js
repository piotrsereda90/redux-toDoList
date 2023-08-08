import React,{ useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todo.actions';

const AddTodo = ({addTask}) => {
    console.log(addTask)

    const [inputValue, setInputValue] = useState("")

    const handleInputChange = (e) => setInputValue(e.target.value);
    const handleSubmit = () => {
        if(inputValue) {
            addTask(inputValue);
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
const mapDispatchToProps = (dispatch) => ({
    addTask: (text)=> dispatch(addTodo(text))
})

export default connect(null, mapDispatchToProps)(AddTodo)