
function App() {


  return (
    <div className="">
      <div className="flex flex-col items-center justify-center border">
        <h1 className="mt-4 text-3xl">ToDo List</h1>
        <div className="flex m-10 w-ful p-10 border">
          <input className="p-3 w-[300px]" type="text" placeholder="Add a new Task" />
          <button className=" mx-2 py-3 px-4 rounded-md text-white text-xl bg-green-600">Add</button>
        </div>
          <ul>
            <li>
              <span></span>
              <button>X</button>
            </li>
          </ul>
      </div>
    </div>
  )
}

export default App
