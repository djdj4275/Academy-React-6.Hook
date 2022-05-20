import { useReducer } from "react";

// reducer를 이용해서 name을 만들고 
// action.type
// 'reset' : name의 값 '홍길동',
// 'write' : name의 값 payload로 받아온 값

// input 태그를 이용해서 값을 수정해서 받아 올 수 있도록

function reducer(state, action) {
  switch (action.type) {
    case 'reset':
      return init(action.payload);
    case 'write':
      // action.payload = e.taget
      return { name : action.payload };
  }
  return {
    ...state,
    [action.name] : action.value,
  }
}

function init(initialName) {
  return { name : initialName };
}

const ExReducer = () => {
  const [ state, dispatch ] = useReducer(reducer, {
    name : '홍길동',
  })

  const onchange = (e) => {
    dispatch({
      type: 'write',
      payload: e.target.value
    })}

  return (
    <div>
      <h1>ExReducer</h1>
      <input type="text" name="name" onChange={onchange} value={state.name} />
      <button onClick={()=>{dispatch({type: "reset", payload:"홍길동"})}}>초기값</button>
      <p>{state.name}</p>
    </div>
  )
}

export default ExReducer;

