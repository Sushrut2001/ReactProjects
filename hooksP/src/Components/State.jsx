import { useState } from 'react';
const State = () => {
    const [count, setCount] = useState(0);
    if(count<0){
        alert('You can not decrease the value less than 0');
        setCount(0);
    }
        else if(count>10){
            alert('You can not increase the value more than 10');
            setCount(10);
        }
    return (
        <div className='flex justify-center items-center h-screen'>

            <div className='flex-col text-center'>
                <div className=''>
                    <h1>{count}</h1>
                </div>
                <div className='flex gap-5'>
                    <button onClick={() => setCount(count + 1)}>Increase</button>
                    <button onClick={() => setCount(count - 1)}>Decrease</button>
                </div>
            </div>
        </div>
    )
}
export default State;