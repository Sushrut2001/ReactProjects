import React, { useEffect, useState } from 'react'
import Cards from './Cards'
const Effect = () => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')
    const [filteredData, setfilteredData] = useState([])

    const displayData = async () => {
        const api = "https://dummyjson.com/products"
        const response = await fetch(api);
        const result = await response.json();
        setData(result.products)
    }

    useEffect(() => {
        displayData();
    }, [])
    // console.log(data);

    useEffect(() => {
        const filterItem = data.filter((product) => {
            return product.title.toLowerCase().includes(search.toLowerCase());
        })
        setfilteredData(filterItem)
    }, [data, search])
    console.log(filteredData);

    // const handleChange = (e) => {
    //   setSearch(e.target.value)
    // }

    return (
        <div>
            <div className='flex justify-center items-center'>
                <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" className='m-5 p-3 w-[500px] border-none' placeholder='Search what you want...' />
            </div>
            <div className='grid grid-cols-3 h-full gap-5 m-5 text-center'>
                {filteredData.map((product) => (
                    <Cards products={product} />
                ))}
            </div>

        </div>
    )
}
export default Effect;