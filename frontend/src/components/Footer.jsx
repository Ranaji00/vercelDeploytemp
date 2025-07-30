// // mport React from 'react'
// import { FaInstagram } from "react-icons/fa";
// import { BsTwitterX } from "react-icons/bs";



const Footer = () => {
  return (
    <div className='mx-auto px-10  py-10 bg-[#032f62] text-gray-200'>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 justify-center max-w-4/5 text-sm md:text-md font-light mx-auto py-4  border-b-2'>

        <div>
          <h1 className='font-semibold  py-4'>News Letter</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis dolor quas quam?</p>
          <p>Lorem ipsum dolor sit amet.</p>



        </div>


        <div className='ml-8' >

          <h1 className='py-4 font-semibold'>Shop</h1>
          <div>Mens`s cate</div>
          <div>Mens`s cate</div>
          <div>Mens`s cate</div>



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
          <div className='w-full flex justify-start gap-2 pb-4'>
            {/* <FaMeta />
                <FaInstagram />
                <BsTwitterX /> */}

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