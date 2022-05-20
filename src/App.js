import './App.css';
import HookComp from './components/HookComp'
import ReducerComp from './components/ReducerComp';
import ReducerComp2 from './components/ReducerComp2';
import ExReducer from './components/ExReducer';

function App() {
  return (
    <div className="App">
      <HookComp />
      <ReducerComp />
      <ReducerComp2 />
      <ExReducer />
    </div>
  );
}

export default App;
