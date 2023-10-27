import logo from './logo.svg';
import './App.css';
import { INCREMENT, DRCREMENT } from './action/action';
import { useDispatch,useSelector } from 'react-redux';

function App() {
  const no = useSelector(state => state.Counter);
  const dispatch=useDispatch()
  return (
    <div className="App">
      <>
        <h1>Counter:-{no}</h1>
        <button onClick={() => dispatch(INCREMENT())}>+</button>&nbsp;
        <button onClick={() => dispatch(DRCREMENT())}>-</button>
      </>
    </div>
  );
}

export default App;
