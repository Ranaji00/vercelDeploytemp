import React, { useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import Cartcontent from '../cart/Cartcontent';


const Checkout = ({isOpen , setOpen}) => {

   

    return (
        <>

            <div className={`gap-2 sm:w-1/2 bg-white fixed top-0 right-0 border-2 flex transition-all transform duration-700 ease-in ${isOpen ? "translate-x-0" : "translate-x-full"} border-stone-400 px-2 py-4  h-screen  md:w-1/4 flex-col justify-between`}>

                <div className=' flex flex-col gap-4'>

                    <span
                    onClick={()=> setOpen(!isOpen) } className='flex justify-end text-xl'>
                        <IoCloseSharp />
                    </span>

                    <h1 className=' text-lg border-b-2 font-semibold '>
                        Your Cart
                    </h1>

                    <Cartcontent/>

                </div>



                <div>

                    <button className='border-2 bg-black text-white w-full py-2 rounded-full '>
                        Checkout
                    </button>

                    <p className=' mt-2 text-xs'>Lorem kio ipsum hdghcg consectetur adipisicing elit.</p>
                </div>
            </div>

        </>
    )
}

export default Checkout