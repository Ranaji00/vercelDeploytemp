import React from 'react'
import { IoLogoInstagram } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoFacebook } from "react-icons/io";
import { Link } from "react-router-dom";
import { RiDiscountPercentFill } from "react-icons/ri";
import { MdMessage } from "react-icons/md";





const Topbar = () => {
    return (

        <>
            
        <div className='w-screen py-1 md:flex flex  px-3  md:px-6 md:justify-around justify-between  bg-gradient-to-r from-[#6FB1FC] via-[#4364F7] to-[#0052D4]  text-white'>

            <div className=' md:flex flex md:justify-between items-center text-xl md:text-2xl gap-2'>
                <Link to={""} className='hover:text-blue-800 text-sm md:text-[32px]'><IoLogoFacebook /></Link>
                <Link to={""} className='hover:text-blue-800 text-sm md:text-[32px]'><IoLogoInstagram /></Link>
                <Link to={""} className='hover:text-blue-800 text-xs md:text-[28px]'><BsTwitterX /></Link>
            </div>

            <div className='flex text-[8px] md:text-[16px] text-center  items-center gap-1 md:gap-3 '>
                <span className='md:text-[28px]'><RiDiscountPercentFill/></span>
                <span>
                    Festival Special Offer ,<span></span> Best Prices and Discouts are Avialable now
                </span>
            </div>

            <div className='hidden items-center gap-2  md:flex'>
                <span className='text-2xl'>
                        <MdMessage/>
                </span>
                <span>

                 +91 757657589
                </span>
            </div>

        </div>



        </>


    )
}

export default Topbar