import React from 'react'

function Techlist() {
  return (
    <div>
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
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="text" class="block mb-2 text-sm font-medium text-white">Electronic name</label>
                      <input type="text" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="electronic name" required=""/>
                  </div>
                  <div>
                      <label for="" class="block mb-2 text-sm font-medium text-white">Electronic Price</label>
                      <input type="number"  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="electronic price" required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-white">Image url</label>
                      <input type="text" name="password" id="password" placeholder="Electronic image" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  
                  <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Submit</button>
                  
              </form>
          </div>
      </div>
  </div>
</section>
    </div>
  )
}

export default Techlist