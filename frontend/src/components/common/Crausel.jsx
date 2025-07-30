import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import crWatch from '../../assets/crWatch.jpg'
import sonyhead from '../../assets/sonyhead.jpg'
import iphone15 from '../../assets/iphone15.png'
import macpro from '../../assets/macpro.jpg'

const Crausel = () => {
    const settings = {
        dots: true,              // shows dots
        infinite: true,          // loop
        speed: 500,              // transition speed
        slidesToShow: 1,         // number of visible slides
        slidesToScroll: 1,       // how many slides to scroll
        autoplay: true,
        autoplaySpeed: 40000
    };

    return (<>
        <div className='px-6 pb-8 pt-5 border-2 ' >
            <Slider className='w-full  ' {...settings}>
                {/* Slide 1 */}


                <div className='w-full   rounded-3xl  text-white p-4'>

                    <div className='flex md:gap-10  bg-[#294f7e] rounded-3xl items-center justify-between'>

                        <img className='md:w-[32rem] w-1/2 object-contain rounded-3xl' src={crWatch} />

                        <div className='  px-3'>
                            <h1 className='md:text-6xl text-lg  font-bold'>AURE SMART WATCH</h1>
                            <p className='md:text-5xl text-md font-thin'>Cold Winter Solider Edition - 567</p>
                            <div className='w-full flex justify-center'>
                            <button className='mt-4 md:px-10 px-4  md:text-xl text-xs rounded-lg py-3 bg-[#174664]'>
                                Check it out
                            </button>

                            </div>
                        </div>


                    </div>


                </div>


                {/* slide 2 */}


                



                 <div className='w-full   rounded-3xl  text-white p-4'>

                    <div className='flex md:gap-10  bg-[#aa4970] rounded-3xl items-center justify-between'>

                        <img className='md:w-[32rem] w-1/2 object-contain rounded-3xl' src={sonyhead} />

                        <div className='  px-8 '>
                            <h1 className='md:text-6xl text-lg  font-bold'>SONY HEAD PHONE</h1>
                            <p className='md:text-5xl text-md font-thin'>Royal Rosy Edition - 786</p>
                            <div className='w-full flex justify-center'>
                            <button className='mt-4 md:px-10 px-4  md:text-xl text-xs rounded-lg py-3 bg-[#491422]'>
                                Check it out
                            </button>

                            </div>
                        </div>


                    </div>


                </div>



                 <div className='w-full   rounded-3xl  text-white p-4'>

                    <div className='flex md:gap-10  bg-[#525964] rounded-3xl items-center justify-between'>

                        <img className='md:w-[32rem] w-1/2 object-contain rounded-3xl' src={iphone15} />

                        <div className='  px-6'>
                            <h1 className='md:text-6xl text-lg  font-bold'>IPHONE 15 PRO</h1>
                            <p className='md:text-5xl text-md font-thin'>Now Available in Slate Grey</p>
                            <div className='w-full flex justify-center'>
                            <button className='mt-4 md:px-10 px-4  md:text-xl text-xs rounded-lg py-3 bg-[#3c434f]'>
                                Check it out
                            </button>

                            </div>
                        </div>


                    </div>


                </div>



                 <div className='w-full   rounded-3xl  text-white p-4'>

                    <div className='flex md:gap-16 px-6 md:px-10  bg-[#090909] rounded-3xl items-center justify-between'>

                        <img className='md:w-[32rem] w-1/2 h-64 md:h-[32rem] object-contain rounded-3xl' src={macpro} />

                        <div className=' '>
                            <h1 className='md:text-6xl text-lg  font-bold'>MAC BOOK 15 PRO</h1>
                            <p className='md:text-4xl text-md font-thin'>Now Available in Celestial Black</p>
                            <div className='w-full flex justify-center'>
                            <button className='mt-4 md:px-10 px-4 text-black md:text-xl text-xs rounded-lg py-3 bg-[#fcfdff]'>
                                Check it out
                            </button>

                            </div>
                        </div>


                    </div>
        </div>

                {/* </div>   <div className='   rounded-3xl  text-white p-4'>
                    <div className='flex h-[32rem]  gap-10 py-2 bg-[#090909] rounded-3xl items-center justify-center'>
                        <img className='  object-contain rounded-3xl' src={macpro} />
                        <div>
                            <h1 className='text-6xl font-bold'>MAC BOOK 15 PRO</h1>
                            <p className='text-5xl font-thin'></p>
                            <button className='mt-4 px-10 text-xl rounded-lg py-3 text-black bg-[#fcfdff]'>
                                Check it out
                            </button>
                        </div>
                    </div>
                </div> */}
 


                

             
               
            </Slider>
        </div>
    </>
    )
}

export default Crausel
