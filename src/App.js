import './App.css';
import HookComp from './components/HookComp'
import ReducerComp from './components/ReducerComp';
import ReducerComp2 from './components/ReducerComp2';
import ExReducer from './components/ExReducer';
import MemoHook from './components/MemoHook';

function App() {
  return (
    <div className="App">
      <MemoHook />
      <HookComp />
      <ReducerComp />
      <ReducerComp2 />
      <ExReducer />
    </div>
  );
}

export default App;
