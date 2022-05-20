import { useReducer } from 'react'

function reducer(state, action) {
  // 이전 state의 값을 스프레드 연산자로 안의 내용을 꺼낸후
  // action.name과 action.value를 통해 새로운 속성값 작성
  return {
    ...state,
    [action.name] : action.value // e.taget.name : e.taget.value 라 보면됨
  }
}

const ReducerComp2 = () => {
  const [ state, dispatch ] = useReducer(reducer, { // 위의 reducer의 state 값 작성
    name : 'ss',
    nickname : 'ss'
  })

  // 이벤트가 실행될 때 이벤트 객체를 들고와서 
  // 현재 실행되는 이벤트 타겟을 dispatch로 넘겨준다. 
  const onchange = (e) => { dispatch(e.target) }

  return (
    <div>
      <h1>Reducer Hook2</h1>
      <input type="text" name='name' onChange={onchange} /> <br />
      <input type="text" name='nickname' onChange={onchange} />
      <p>{state.name}</p>
      <p>{state.nickname}</p>
    </div>
  );
}

export default ReducerComp2;