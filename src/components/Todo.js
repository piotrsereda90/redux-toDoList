const Todo = ({key, text, active, onClick}) => {

    return(
        <li
            onClick={onClick}
            style={{textDecoration: active ? "line-through" : "none", cursor:"pointer"}} 
            key={key}
        >
            {text}
        </li>
    )
}

export default Todo