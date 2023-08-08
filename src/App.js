
import './App.css';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { configureStore } from '@reduxjs/toolkit';
import TodoList from './containers/TodoList';
import AddTodo from './containers/AddTodo';
import Footer from './containers/Footer';

const store = configureStore({reducer:rootReducer})

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <main className="App-main">
          <AddTodo/>
          <TodoList/> 
          <Footer/>
        </main>
      </div>
    </Provider>
  );
}

export default App;
