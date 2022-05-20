import {useState, useEffect} from 'react';

const HookComp = () => {
    // useState는 statehook으로 사용된다.
    const [count, setCount] = useState(0);
    // statehook은 여러개 작성할수있다.
    const [username, setUsername] = useState('홍길동');
    const [date, setDate] = useState(new Date());

    // componentDidMount, componentDidUpdate, componentWillUnmount
    // 와 동일하게 사용한다.
    useEffect(() => {
        // componentDidMount, componentDidUpdate 와 동일하게 움직임
        document.title = count;
        console.log(count);
        // componentWillUnmount와 동일한 역할
        return ()=>{console.log("언마운트 되었습니다")}
    }, [count]); // 두번째 올 인수로는 []안에 업데이트 할 변수 이름을 작성
    // [] 빈 값으로 두면 처음 mount 할때만 실행이 된다.
    // 두번째 오는 값이 변화가 되면 재 실행되는 흐름
    // 두번째 오는 값을 렌더링 후에 비교하여 값이 같다면 리렌더링 하지 않고
    // 다르면 리렌더링 시행함
    // 두번째 인수가 없을땐 업데이트와 마운드가 같이 일어난다.

    // ------------------------------------------------------------------
    // 시간을 출력 > useEffect
    // this.state.date.toLocaleTimeString() 으로 화면에 출력
    // 클래스 형에서 작성한 시간 출력내용을 useEffect로 바꿔서 출력하세요
    //-------------------------------------------------------------------
    // tick = () => {
    //     this.setState({date : new Date()})
    // }
    const tick = () => {
        setDate(new Date());
    }
    // componentDidMount() {
    //     console.log("마운트가 되었습니다")
    //     this.timerId = setInterval(()=>this.tick(), 1000);
    // }
    useEffect(()=>{
        console.log("마운트가 되었습니다")
        setInterval(()=>tick(), 1000);
    },[])


    return (
        <div>
            <h1>StateHook</h1>
            <h1>{date.toLocaleTimeString()}</h1>
            <h3>{username}</h3>
            <p>{count}</p>
            <button
            onClick={()=>{setCount(count+1)}}
            >
                +1
            </button>
        </div>
    )
}

export default HookComp;