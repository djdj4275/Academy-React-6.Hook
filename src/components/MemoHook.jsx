import { useState, useMemo, useCallback } from "react";
// input 태그로 값을 입력받으면 
// 추가라는 버튼을 눌렀을대 li 태그에 추가됨 > number 배열
// number 배열의 합을 h3태그로 출력

// # memoization이란 수행 연산의 결과를 어딘가에 저장해두고
// 동일한 입력이 들어오면 재활용하는 프로그래밍 기법
// 이 기법방법은 두가지가 있는데 usememo와 usecallback
// usememo는 기준이 되는 (적어놓은) 인자에 따라 메모이제이션된 '값'을 반환
// usecallback은 기준이 되는 (적어놓은) 인자에 따라 메모이제이션된 '함수'를 반환

const MemoHook = () => {
  const [inputnum, setInputnum] = useState(0);
  const [number, setNumber] = useState([10, 6]);

  const onChange = useCallback((e) =>{
    setInputnum(e.target.value);
  },[]) // 콜백함수를 사용해서 처음 렌더링 할때만 함수 생성
  const addNum = useCallback(()=>{
    setNumber([...number, parseInt(inputnum)]);
    setInputnum(0);
  }, [inputnum, number]); // 콜백함수를 사용해서 inputnum과 number값이 바뀔때만 함수 사용
  // 화살표 함수는 익명함수중 하나(한번사용하고 버림)
  // 이벤트에서 사용되는 익명함수는 이벤트가 실행될때마다 함수를 만듦
  // 동일한 일을 하는 함수는 재사용하기 위해서 CalLback사용
  // 콜백은 뒤의 인자에 따라 렌더 기준 삼음
  
  const allSum = (list) => { // useMemo 써서 useState 값이 바뀔때마다 호출
    // for문 사용해서 더하기 && reduce((a,b)=>a+b) 메소드 사용
    // for (let i=0; i<10; i++) {실행할 내용}
    // for (m in list) {} list의 in을 사용해서 반복하며 인덱스값 출력
    // for (n of list) {} list의 of를 사용해서 반복하며 요소값을 출력
    return list.reduce((a,b)=>a+b);
  }

  // useMemo를 사용할 변수, 특정 변수의 값이 바뀔때 실행
  const sum = useMemo(()=>allSum(number), [number]); // number가 바뀔때마다 allsum(number) 실행

  return (
    <div>
      <h1>MemoHook</h1>
      <input type="text" onChange={onChange} value={inputnum}/>
      <button onClick={addNum}>추가</button>
      {/* 메소드의 리턴값을 보여줌 */}
      <h3>더한 값 : { sum }</h3>
      <ul>
        { number.map((n,i) => (
          <li key={i}>{n}</li>
        )) }
      </ul>
    </div>
  );
};

export default MemoHook;