import React, { useState, useEffect,useContext,createContext } from 'react';
import Example3 from './example3'
// function Index() {
//     useEffect(() => {
//         console.log('你来了啊');
//         return () => {
//             console.log('你走了啊');
//         }
//         // []空数组表示 不执行解绑操作
//     })  //count表示只有count变化才执行销毁操作
//     return <h2>reacthooksIndex</h2>
// }

const CountContext = createContext();
function Counter(){
    let count = useContext(CountContext);
    return <h2>{count}</h2>
}

function Example() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(count);
        return ()=>{
            console.log('销毁了');
        }
    },[])
    return (
        <div>
            you clicked {count} times
            <button onClick={() => setCount(count + 1)}>clicked</button>
            <CountContext.Provider value={count}>
                <Counter />
            </CountContext.Provider>
            <Example3 name={count} age='111'/>
        </div>
    )
}
export default Example;