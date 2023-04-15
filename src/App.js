import './App.css';
import ShowHide from './Components/ShowHide';
import StopWatch from './Components/StopWatch';
import TodoList from './Components/TodoList';

function App() {
  return (
    <div className="App">
      <StopWatch />
      <ShowHide />
      <TodoList />
    </div>
  );
}

export default App;