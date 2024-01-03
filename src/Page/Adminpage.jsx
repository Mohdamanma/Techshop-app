import { Button } from 'flowbite-react'
import React, { useState } from 'react'

function Adminpage() {
    const [addtech, Setadd] = useState('')
    const [addvalues, Setaddvalues] = useState([])
    //const [deletevalues, Setdeletevalues] = useState('')

    const additem = () => {
        Setaddvalues([...addvalues, addtech])
    }
   
    const deleteitem = () => (index) => {
        const newArray = [...addvalues];
        newArray.splice();
        Setaddvalues(newArray);
      };


    return (

        <div className=' h-80 '>
            <div className='pl-24 pt-20 flex'>
                <input value={addtech}
                    onChange={(e) => {
                        Setadd(e.target.value)
                        console.log(e.target.value);
                    }}
                    type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-36  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required="" />
                <Button onClick={additem} className='text-red-900 ml-14'>
                    Add
                </Button>

            </div>
            <div className='flex flex-col'>
            {addvalues.map((e) => 
            <h1 >{e}</h1>
            )} 
            <Button onClick={() => deleteitem()} className='text-red-900 ml-14'>Delete</Button>
           
            </div>
        </div>

    )
}

export default Adminpage