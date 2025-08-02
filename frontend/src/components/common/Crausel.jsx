import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import crWatch from '../../assets/crWatch.jpg'
import sonyhead from '../../assets/sonyhead.jpg'
import iphone15 from '../../assets/iphone15.png'
import macpro from '../../assets/macpro.jpg'
import { Link } from 'react-router-dom'

const Crausel = () => {

    const settings = {
        dots: true,              // shows dots
        infinite: true,          // loop
        speed: 500,              // transition speed
        slidesToShow: 1,         // number of visible slides
        slidesToScroll: 1,       // how many slides to scroll
        autoplay: true,
        autoplaySpeed: 2200
    };

    return (<>


        <div className='px-6 pb-8 pt-5' >
            <Slider className='w-full  ' {...settings}>
                {/* Slide 1 */}




                <div className='w-full hover:cursor-grab  border-black h-64 md:h-[34rem]    rounded-3xl  text-white p-4'>

                    <div className='flex md:gap-4 gap-2  overflow-clip bg-[#294f7e] h-full  rounded-3xl items-center justify-between'>
                        <div className="w-full md:w-[90%] h-full ">

                            <img className='h-full w-full  object-cover object-center' src={crWatch} />
                        </div>

                        <div className='md:flex flex-col justify-center items-center w-full tracking-tight leading-5 px-1 pr-4 '>
                            <h1 className='md:text-6xl text-xs  font-bold'>AURE SMART WATCH</h1>
                            <p className='md:text-5xl text-xs font-thin'>Cold Winter Solider Edition</p>
                            <div className='w-full flex justify-center'>
                                <Link to="/collection" className='mt-4 md:px-10 hover:cursor-pointer px-3  md:text-xl text-xs rounded-lg md:py-3 py-2 transition-all duration-[890] bg-[#166fb8] hover:bg-white hover:text-blue-700'>
                                    Check it out
                                </Link>

                            </div>
                        </div>


                    </div>


                </div>

                {/* -- */}



                <div className='w-full hover:cursor-grab  border-black h-64 md:h-[34rem]    rounded-3xl  text-white p-4'>

                    <div className='flex md:gap-4 gap-2  overflow-clip bg-[#aa4970] h-full  rounded-3xl items-center justify-between'>
                        <div className="w-full md:w-[90%] h-full ">

                            <img className='h-full w-full  object-cover object-center' src={sonyhead} />
                        </div>

                        <div className='md:flex flex-col justify-center items-center w-full tracking-tight leading-5 px-1 pr-4 '>
                            <h1 className='md:text-6xl text-xs  font-bold'>SONY HEAD PHONE</h1>
                            <p className='md:text-5xl text-xs font-thin'>Royal Rosy Edition - 786</p>
                            <div className='w-full flex justify-center'>
                                <Link to="/collection" className='mt-4 md:px-10 hover:cursor-pointer px-3  md:text-xl text-xs rounded-lg md:py-3 py-2 transition-all duration-[890] bg-[#491422] hover:bg-white hover:text-[#491422]'>
                                    Check it out
                                </Link>

                            </div>
                        </div>


                    </div>


                </div>




                {/* slide 2 */}




                <div className='w-full hover:cursor-grab  border-black h-64 md:h-[34rem]    rounded-3xl  text-white p-4'>

                    <div className='flex md:gap-4 gap-2  overflow-clip bg-[#090909] h-full  rounded-3xl items-center justify-between'>
                        <div className="w-[25rem]  md:w-[90%] h-full ">

                            <img className='h-full w-full  object-contain object-center' src={macpro} />
                        </div>

                        <div className='md:flex flex-col justify-center items-center w-full tracking-tight leading-5 px-1 pr-4 '>
                            <h1 className='md:text-6xl text-xs  font-bold'>MAC BOOK 15 PRO</h1>
                            <p className='md:text-5xl text-xs font-thin'>Now Available in Celestial Black</p>
                            <div className='w-full flex justify-center'>
                                <Link to="/collection" className='mt-4 md:px-10 hover:cursor-pointer px-3  md:text-xl text-xs rounded-lg md:py-3 py-2 transition-all duration-[890] text-black bg-[#fcfdff] hover:bg-zinc-900 hover:text-[#fcfdff]'>
                                    Check it out
                                </Link>

                            </div>
                        </div>


                    </div>


                </div>






                <div className='w-full hover:cursor-grab  border-black h-64 md:h-[34rem]    rounded-3xl  text-white p-4'>

                    <div className='flex md:gap-4 gap-2  overflow-clip bg-[#525964] h-full  rounded-3xl items-center justify-between'>
                        <div className="w-full md:w-[90%] h-full ">

                            <img className='h-full w-full  object-cover object-center' src={iphone15} />
                        </div>

                        <div className='md:flex flex-col justify-center items-center w-full tracking-tight leading-5 px-1 pr-4 '>
                            <h1 className='md:text-6xl text-xs  font-bold'>IPHONE 15 PRO</h1>
                            <p className='md:text-5xl text-xs font-thin'>Now Available in Slate Grey</p>
                            <div className='w-full flex justify-center'>
                                <Link to="/collection"className='mt-4 md:px-10 hover:cursor-pointer px-3  md:text-xl text-xs rounded-lg md:py-3 py-2 transition-all duration-[890] bg-[#3c434f] hover:bg-white hover:text-[#3c434f]'>
                                    Check it out
                                </Link>

                            </div>
                        </div>


                    </div>


                </div>


                {/*  */}


            </Slider>
        </div>
    </>
    )
}

export default Crausel
