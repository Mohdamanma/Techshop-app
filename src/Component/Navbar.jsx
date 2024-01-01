import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div >
            <nav class="bg-black bg-opacity-95 border-gray-200 dark:bg-gray-900 dark:border-gray-700 h-20">
                <div class="w-full flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD0oI1lAEHqMxOMqcALlNcJ2n4VbjjTA8AZg&usqp=CAU" class="h-8" alt="Flowbite Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap text-red-900">Electrolux</span>
                    </a>
                   
                    <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                        <Link to={"/login"}>
                       <button className='text-red-700 border-2 p-2 hover:bg-red-500 rounded-xl w-16'>
                        Login
                       </button>
                       </Link>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar