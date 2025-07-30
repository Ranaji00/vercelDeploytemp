import React from 'react'
import asc from '../../assets/asc.jpeg'
import camera from '../../assets/camera.jpeg'
import headphone3 from '../../assets/headphone3.jpeg'
import iphone from '../../assets/iphone.jpeg'
import ps52 from '../../assets/ps52.jpeg'
import keyboard from '../../assets/keyboard.jpeg'
import laptop from '../../assets/laptop.jpeg'
import smartwat from '../../assets/smartwat.jpeg'

const Category = () => {
  return (
    <>

        <div>

                <h1 className='text-xl font-semibold  px-8 py-4'>Shop by Categories </h1>
                <div className='flex justify-start items-center px-10 gap-6 overflow-x-scroll '>

                    <div className='border-2 px-2 py-1'>
                        <img className="w-58 h-40 object-contain " src={asc} />
                        <p className='font-medium text-md'>Accessories</p>
                    </div>

                    <div className='border-2    px-2 py-1'>
                        <img className="w-58 h-40 object-contain" src={iphone} />
                        <p className='font-medium text-md'>Mobile</p>
                    </div>

                    <div className='border-2    px-2 py-1'>
                        <img className="w-58 h-40 object-contain" src={headphone3} />
                        <p className='font-medium text-md'>Headphone</p>
                    </div>

                    <div className='border-2    px-2 py-1'>
                        <img className="w-58 h-40 object-contain" src={camera} />
                        <p className='font-medium text-md'>Camera</p>
                    </div>
                    <div className='border-2    px-2 py-1'>
                        <img className="w-58 h-40 object-contain" src={laptop} />
                        <p className='font-medium text-md'>Laptops</p>
                    </div>
                    <div className='border-2     px-2 py-1'>
                        <img className="w-58 h-40 object-contain " src={keyboard} />
                        <p className='font-medium text-md'>Laptop Accessories</p>
                    </div>
                    <div className='border-2    px-2 py-1'>
                        <img className="w-58 h-40 object-contain" src={ps52} />
                        <p className='font-medium text-md'>Playstation</p>
                    </div>
                    <div className='border-2    px-2 py-1'>
                        <img className="w-58 h-40 object-contain" src={smartwat} />
                        <p className='font-medium text-md'>SmartWatch</p>
                    </div>
                    
                   
                </div>

        </div>
    
    
    </>
  )
}

export default Category