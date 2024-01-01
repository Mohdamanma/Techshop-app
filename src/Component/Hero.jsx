import React from 'react'
import Herocard from './Herocard';

function Hero() {
  const Herolist = [{
    heading: "watch",
    para: "watch",
    image: "",
  },
  {
    heading: "watch",
    para: "watch",
    image: "",
  },
  {
    heading: "watch",
    para: "watch",
    image: "",
  },

]
  return (

    <div>
        <section class="dark:bg-gray-900 bg-black bg-opacity-40 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHjKlIlBwaeUfbkgYkWOI9lE3H3ad38rG07g&usqp=CAU')] bg-blend-darken ">
      <div class=" bg-gray-700 flex flex-col pt-6 bg-opacity-75 w-full h-36  text-center  ">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Electro<span className='text-red-600'>lux</span></h2>
        <p class=" text-black lg:mb-16 sm:text-xl font-light">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
      </div>
         Herolist.map
        <Herocard />
        


      </section>


    </div>
  );
}


export default Hero