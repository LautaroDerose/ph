import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { navLinks } from '../constants';


const Navbar = () => {
    const links = navLinks;
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };
        document.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, []);


    return (


        <div className=' fixed w-screen bg-slate-200 z-10 top-0  flex justify-between items-center h-16 mx-auto px-4 md:px-[2rem] lg:px-[15%] text-purple-500'>
            <a href='/' className='w-[50px] border-2  hover:border-[#019EDD] rounded-full'>
              <h1 className='text-purple-500 text-2xl font-black flex m-auto '>Potenciando <span className='text-green-500 '>Habitos</span></h1>
            </a>
            {/* <a href='/' className='w-[50px] border-2 border-white hover:border-[#019EDD] rounded-full'> <img src={`${scrolled ? "logoIcon_Wcolor_transparent.png" : "logoIcon_white_transparent.png"}`} alt="" className='w-[4rem] duration-300' /></a> */}
            <div className='hidden md:flex'>
                {
                    links.map((item) => (
                        <a
                            className={`text-purple-500 p-4 text-xl font-bold hover:scale-200 hover:text-green-500 hover:-translate-y-1 duration-300 ${scrolled ? '' : ''} `}
                            href={item.toLink}
                            key={item.id}
                        >
                            {item.label}
                        </a>
                    ))
                }
            </div>

            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} className='text-gray-400' /> : <AiOutlineMenu size={20} className='text-gray-400' />}
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-800 bg-gray-900 ease-in-out duration-500' : 'fixed left-[-100%] '}>
                {/* <div className='w-[50%] p-4'> <img src="Logo2.png" alt="" className='w-full' /></div> */}
                <div className='p-4 uppercase '>
                    {
                        navLinks.map((item) => (
                            <div className={nav ? 'p-4 text-gray-400 hover:text-green-500] border-b border-gray-600' : 'hidden'} key={item.id}>
                                <a
                                    className='focus:outline-none focus:text-green-500'
                                    href={item.toLink}
                                    // key={item.id}
                                >
                                    {item.label}
                                </a>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar