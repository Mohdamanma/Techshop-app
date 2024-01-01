import React from 'react'

function Herocard() {
  return (
    <div>
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
       
      <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          <div class="items-center bg-yellow-200 bg-opacity-75 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img class="w-full h-52 rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD1Clxk3ujGj4eaS6CcMzmAE-JlOYipS-2LQ&usqp=CAU" alt="Bonnie Avatar"/>
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Laptop</a>
                  </h3>
                 
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Bonnie drives the technical strategy of the flowbite platform and brand.</p>
                      
                     
              </div>
          </div> 
          <div class="items-center  bg-yellow-200 bg-opacity-75 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img class="w-full h-52 rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN2mre82MK5i2n8bzQH8pqI_3G6a5_hyWXjQ&usqp=CAU" alt="Jese Avatar"/>
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Watch</a>
                  </h3>
                  <span class="text-gray-500 dark:text-gray-400">CTO</span>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Jese drives the technical strategy of the flowbite platform and brand.</p>
                 
              </div>
          </div> 
          <div class="items-center  bg-yellow-200 bg-opacity-75 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img class="w-full h-52 rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN2mre82MK5i2n8bzQH8pqI_3G6a5_hyWXjQ&usqp=CAU" alt="Michael Avatar"/>
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Michael Gough</a>
                  </h3>
                  <span class="text-gray-500 dark:text-gray-400">Smart watch</span>
                  <p class="mt-3 mb-4 font-light text-red-500 ">Michael drives the technical strategy of the flowbite platform and brand.</p>
                
              </div>
          </div> 
          <div class="items-center  bg-yellow-200 bg-opacity-75 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img class="w-full h-52 rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTstsC3wo7149QmJq1EmVGkSklApUSlZwZ9rQ&usqp=CAU" alt="Sofia Avatar"/>
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Lana Byrd</a>
                  </h3>
                  <span class="text-gray-500 dark:text-gray-400">Rolex</span>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Lana drives the technical strategy of the flowbite platform and brand.</p>
                  
                  
              </div>
          </div>  
      </div>  
  </div>
    </div>
  )
}

export default Herocard