import Todo from '../components/Todo';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTodo, AVAILABLE_FILTERS } from '../actions/todo.actions';

const filterTodos = (todos, filter) => {
    switch(filter){
        case AVAILABLE_FILTERS.SHOW_ACTIVE:
            return todos.filter(todo => todo.complete === false)
        case AVAILABLE_FILTERS.SHOW_COMPLETE:
            return todos.filter(todo => todo.complete === true)
        default:
            return todos;
    }
}

const TodoList = () => {
   
    const dispatch = useDispatch()

    const todos = useSelector((state)=> filterTodos(state.todos, state.filter))

    return(
       <div>
        <ul>
        {todos.map(todo =>
        <Todo 
            onClick={()=> dispatch(toggleTodo(todo.id))}
            id={todo.id}
            text={todo.text}
            active={todo.complete}
        />)}
        </ul>
       </div>
    )
}

export default TodoList;