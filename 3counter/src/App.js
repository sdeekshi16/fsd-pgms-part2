import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import {actions} from './store/Index.js';

function App() {
const counter = useSelector((state) => state.counter); 
const dispatch=useDispatch();
const increment=()=>{
  dispatch(actions.increment());
};
const decrement=()=>{
  dispatch(actions.decrement());
};
 return (
 <div class="container">
 <h1>The counter test</h1>
<h2>Counter:{counter}</h2>
<button onClick={increment}>Increment</button>
<button onClick={decrement}>Decrement</button>
 </div>
 );
}

export default App;
