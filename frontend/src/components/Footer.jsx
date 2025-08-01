// mport React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaMeta } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";



const Footer = () => {
  return (
    <div className='mx-auto px-10  py-10 bg-[#032f62] text-gray-200'>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 justify-center max-w-4/5 text-sm md:text-md font-light mx-auto py-4  border-b-2'>

        <div>
          <h1 className='font-semibold  py-4'>News Letter</h1>
          <p> We Provide Best Quality, Assured Gauranted Products</p>
          <p> Our products are provided by Trusted Brands and Dealers </p>



        </div>


        <div className='ml-8' >

          <h1 className='py-4 font-semibold'>Shop</h1>
          <div>Home</div>
          <div>Gadgets</div>
          <div>About Us</div>
          <div>Contact</div>



        </div>


        <div className=''>

          <h1 className='font-semibold py-4'>Support</h1>

          <div>Contact us</div>
          <div>Contact us</div>
          <div>Contact us</div>
          <div>Contact us</div>

        </div>


        <div className='ml-8' >

          <h1 className=' font-semibold py-4'>Follow me </h1>
          <div className='w-full flex  cursor-pointer justify-start gap-2 pb-4'>
            <FaMeta />
            

            <FaInstagram />

            <BsTwitterX />

          </div>

          <h2>Call us</h2>
          <p>+90 6576565</p>


        </div>





      </div>


      <div className="text-sm tracking-tighter text-center  text-stone-300 mt-2">
        &copy; 2025 Neeraj Rana. All rights reserved.
      </div>



    </div>
  )
}

export default Footer