import FilterButton from  '../components/FilterButton';
import { AVAILABLE_FILTERS } from '../actions/todo.actions';

const Footer = () => {
    return(
        <footer>
            <FilterButton filter={AVAILABLE_FILTERS.SHOW_ALL}>ALL</FilterButton>
            <FilterButton filter={AVAILABLE_FILTERS.SHOW_COMPLETE}>DONE</FilterButton>
            <FilterButton filter={AVAILABLE_FILTERS.SHOW_ACTIVE}>ACTIVE</FilterButton>
        </footer>
    )
}
export default Footer;