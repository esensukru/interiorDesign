import React from 'react'
import { TbGridDots, TbMenu4 } from "react-icons/tb"

function Header() {
    return (
        <header className='container mx-auto py-5 flex items-center justify-between absolute top-0 left-0 right-0 z-2'>
            <div className="logo-wrapper">
                <span className="text-2xl font-black cursor-pointer text-white">E-Design</span>
            </div>

            <nav className='items-center gap-5 text-white nav hidden md:flex'>
                <a href="#" className='font-medium'>Product</a>
                <a href="#" className='font-medium'>Lifestyle</a>
                <a href="#" className='font-medium'>News</a>
                <a href="#" className='font-medium'>Projects</a>
            </nav>

            <div className="icon-wrapper text-2xl cursor-pointer text-white flex gap-5">
                <TbMenu4 className='md:hidden' />
                <TbGridDots />
            </div>


        </header>
    )
}

export default Header