const Todo = ({id, text, active, onClick}) => (
        <li
            key={id}
            onClick={onClick}
            style={{textDecoration: active ? "line-through" : "none", cursor:"pointer"}} 
        >
            {text}
        </li>
    )

export default Todo;