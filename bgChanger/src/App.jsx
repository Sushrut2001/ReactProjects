import { useActionState, useState } from "react"

const App =( ) => {
 const[color,setColor] = useState("red")

  return(
    <div className="w-full h-screen"
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-xl">
          <button onClick={() => setColor("red")} className="outline-none px-4  py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Red"}}>Red</button>
          <button onClick={() => setColor("Blue")} className="outline-none px-4  py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Blue"}}>Blue</button>
          <button onClick={() => setColor("Green")} className="outline-none px-4  py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}}>Green</button>
          <button onClick={() => setColor("Yellow")} className="outline-none px-4  py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Yellow"}}>Yellow</button>
          <button onClick={() => setColor("Pink")} className="outline-none px-4  py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Pink"}}>Pink</button>
        </div>
      </div>
    </div>
  )
}
export default App