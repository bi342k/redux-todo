
import './App.css';
import Todo from './Components/TodoContainer'
import { Provider } from 'react-redux';
import store from './Redux/Store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Todo/>
      </div>
    </Provider>
  );
}

export default App;
