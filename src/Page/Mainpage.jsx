import React, { useState, useEffect } from 'react'
import Hero from '../Component/Hero'
import Herocard from '../Component/Herocard'
import Supabase from '../supabase/Supabase'

function Mainpage() {
  const [techdata, setTechdata] = useState([])

  const fetchdata = async () => {
    let { data: electronic, error } = await Supabase
      .from('electronic')
      .select('*')
    setTechdata(electronic)
  }

  useEffect((a) => {
    fetchdata()
  }, [])

  return (
    <div className='flex  m-9'>

      {/* <Hero /> */}
      {techdata.map((e) =>
      (
        <div className='flex flex-col m-8 items-center bg-yellow-200 bg-opacity-75 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700'>
          <img src={e.electronic_image} />


          <h3 class="text-xl font-bold tracking-tight text-red-700 items-center">
            {e.electronic_name}
          </h3>

          <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">{e.electronic_price}</p>


        </div>
      ))}


    </div>


  )
}

export default Mainpage