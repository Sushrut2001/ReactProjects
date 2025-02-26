import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Cards from './Components/Cards'




function App() {
  const [data, setData] = useState([])

  const displayData = async () => {
    const api = "https://dummyjson.com/products"
    const response = await fetch(api);
    const result = await response.json();
    setData(result)
  }

  useEffect(() => {
    displayData();
  }, [])
  console.log(data.products);

  return (
    <div>
      <div className='flex justify-center items-center'>
        <input type="text" className='m-5 p-3 w-[500px] border-none' placeholder='Search what you want...' />
      </div>
      <div className='grid grid-cols-3 h-full gap-5 m-5 text-center'>
        {data.products?.map((product) => (
          <Cards products={product} />
        ))}
      </div>

    </div>
  )
}

export default App;