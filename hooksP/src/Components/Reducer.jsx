import { useReducer } from "react";

const Reducer = () => {

    const initialState = { count: 0, color: 'red' };
    const reducer = (state, action) => {
        switch (action.type) {
            case 'increase':
                return {
                    count: state.count + 1,
                    color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`,
                    
                };
            case 'decrease':
                return {
                    count: state.count - 1,
                    color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`,
                }
            default:
                return state;
        }
    }
    
    const [state, dispatch] = useReducer(reducer, initialState);


    return (

        <div style={{ backgroundColor: state.color }} className="w-full h-screen text-center">
            <div className="flex justify-center">
                <h1 className=" flex justify-center p-10 text-[30px]" >{state.count}</h1>
            </div>
            <div className="flex gap-5 justify-center items-center h-screen ">
                <button className="bg-white p-3 rounded-lg text-xl" onClick={() => dispatch({ type: 'increase' })}>Increase</button>
                <button className="bg-white p-3 rounded-lg text-xl" onClick={() => dispatch({ type: 'decrease' })}>Decrease</button>
            </div>

        </div>


    )
}


export default Reducer;