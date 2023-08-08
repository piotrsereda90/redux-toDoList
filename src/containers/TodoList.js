import { connect } from 'react-redux';
import Todo from '../components/Todo';
import { toggleTodo, AVAILABLE_FILTERS } from '../actions/todo.actions';

const TodoList = ({todos, toggleTodo}) => {
    return(
       <div>
        <ul>
        {todos.map(todo =>
        <Todo 
            onClick={()=> toggleTodo(todo.id)}
            key={todo.id}
            text={todo.text}
            active={todo.complete}
        />)}
        </ul>
       </div>
    )
}

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

const mapStateToProps = (state) => ({
   todos: filterTodos(state.todos, state.filter)
})

const mapDispatchToProps = (dispatch) => ({
    toggleTodo: (id)=> dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)