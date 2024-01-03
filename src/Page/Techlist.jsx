// import { Button } from 'flowbite-react';
import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form"
import Supabase from '../supabase/Supabase';

function Techlist() {

    const [techdata, setTechdata] = useState([])

    // const [item, setItem] = useState("Hello World")
    // const [itemArray, setArray] = useState([1, 2, 3, 4, 5])
    // const [itemObject, setObject] = useState(
    //     {
    //         heading: "Heading 1",
    //         para: "loraaaaaaa"

    //     }
    // )

    const { register, handleSubmit, reset } = useForm();

    //read column
    const fetchData = async () => {

        let { data: electronic, error } = await Supabase
            .from('electronic')
            .select('*')

        console.log("the electronic name is:" + JSON.stringify(electronic))
        setTechdata(electronic)


    }
    useEffect(() => {
        fetchData()
    }, [techdata])

    //Form Submission and upsert value
    const electronicList = async (item) => {
        console.log(item)
        // setTechdata(item)
        reset()

        const { data, error } = await Supabase
            .from('electronic')
            .upsert(
                {
                    electronic_name: item.electronic_name,
                    electronic_price: item.electronic_price,
                    electronic_image: item.electronic_image
                }
            )
            .select()
        setTechdata([...techdata, data[0]])
        console.log("the items is:" + JSON.stringify(item))

    }

    return (
        <div>
            {/* <p>{item}</p>
            {itemArray.map((data) => (
                data
            )
            )} */}

            {/*            
                <h1>{itemObject.heading}</h1>
                <p>{itemObject.para}</p>
            */}

            <section class=" dark:bg-gray-900 bg-black bg-opacity-75  bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHjKlIlBwaeUfbkgYkWOI9lE3H3ad38rG07g&usqp=CAU')] bg-blend-darken">
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" class="flex items-center mb-6 text-6xl font-semibold text-red-700">
                        {/* <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/> */}
                        Electro<span className='text-white'>lux</span>
                    </a>
                    <div class="w-full bg-violet-400 bg-opacity-35 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-2xl font-bold leading-tight tracking-tight text-red-800">
                                Electronic List
                            </h1>
                            <form onSubmit={handleSubmit(electronicList)} class="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label for="text" class="block mb-2 text-sm font-medium text-white">Electronic name</label>
                                    <input
                                        type="text"
                                        name="electronic_name"
                                        id="electronic_name"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="electronic name"
                                        required
                                        {...register("electronic_name")} />
                                </div>
                                <div>
                                    <label for="" class="block mb-2 text-sm font-medium text-white">Electronic Price</label>
                                    <input type="number"
                                        name="electronic_price"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="electronic price"
                                        required
                                        {...register("electronic_price")}
                                    />


                                </div>
                                <div>
                                    <label
                                        for="password"
                                        class="block mb-2 text-sm font-medium text-white"
                                        name="img-url"
                                        id="img-url"
                                    >Image url</label>
                                    <input
                                        type="text"
                                        name="electronic_image"
                                        id="electronic_image"
                                        placeholder="Electronic image"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                        {...register("electronic_image")} />

                                </div>

                                <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Submit</button>

                            </form>

                        </div>
                    </div>


                </div>
                {/* <div className='flex justify-center flex-col items-center'>
                    <h4 className='text-red-600 text-7xl m-5 '>{techdata?.electronic_name}</h4>
                    <Button className='text-red-600 m-7'>{techdata?.electronic_price}</Button>

                    <img className="w-44 h-72 " src={techdata?.electronic_image} />
                </div> */}


            </section>
            <div className='flex'>
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


        </div>
    )
}

export default Techlist