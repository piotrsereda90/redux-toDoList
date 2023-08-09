import {  useSelector, useDispatch } from "react-redux";

const FilterButton = ({ children, filter }) => {

    const active = useSelector((state) =>  state.filter === filter)
    const dispatch = useDispatch()

    return(
        <button 
            onClick={() => dispatch({
            type:"FILTER_TODO",
            filter
    })} 
            disabled={active}
            >
            {children}
        </button>
    )
}

export default FilterButton;