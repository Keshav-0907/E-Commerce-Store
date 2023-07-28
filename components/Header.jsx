import React from 'react'
import { useState, useEffect } from 'react'
import Wrapper from './Wrapper'
import Link from 'next/link'
import Menu from './Menu'
import Menumobile from './Mobilemenu'

import { IoMdHeartEmpty } from 'react-icons/io'
import { BsCart } from 'react-icons/bs'
import { BiMenuAltRight } from 'react-icons/bi'
import { VscChromeClose } from 'react-icons/vsc'



const Header = () => {

  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setshowCatMenu] = useState(false)
  const [show, setshow] = useState("translate-y-0")
  const [lastscroll, setlastscroll] = useState(0)

  const controlNavBar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastscroll && !mobileMenu) {
        setshow("-translate-y-[80px]")
      }
      else {
        setshow("shadow-sm")
      }
    } else {
      setshow("translate-y-0")
    }
    setlastscroll(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener("scroll", controlNavBar)
    return () => {
      window.removeEventListener("scroll", controlNavBar)
    }
  }, [lastscroll])


  return (
    <header className={`w-full h-[50px] md:h-[80px] bg-white flex items-center z-20 sticky justify-between top-0 transition-transform duration-300 ${show}`}>

      <Wrapper classname="h-[60px] justify-between flex items-center">
        <Link className='flex' href='/'>
          <img src='./logo.svg' className='w-[40px] md:w-[60px] px-1' alt='err' />
        </Link>

        <Menu showCatMenu={showCatMenu} setshowCatMenu={setshowCatMenu} />

        {
          mobileMenu && (<Menumobile setMobileMenu={setMobileMenu} showCatMenu={showCatMenu} setshowCatMenu={setshowCatMenu} />
          )
        }


        <div className='flex items-center gap-2 text-black'>

          <div className='w-8 md:w-12 h-8 md:h-12 rounded-full hover:bg-black/[0.05] cursor-pointer relative flex items-center justify-center'>
            <IoMdHeartEmpty className='text-[15px] md:text-[20px]' />
            <div className='h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 flex justify-center items-center absolute text-white top-1 left-5 md:left-7 text-[10px] md:text-[12px]  px-[2px] md:px-[5px]'>
              435
            </div>
          </div>

          <Link>
            <div className='w-8 md:w-12 h-8 md:h-12 rounded-full hover:bg-black/[0.05] cursor-pointer relative flex items-center justify-center'>
              <BsCart className='text-[15px] md:text-[20px]' />
              <div className='h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 flex justify-center items-center absolute text-white top-1 left-5 md:left-7 text-[10px] md:text-[12px]  px-[2px] md:px-[5px]'>
                54
              </div>
            </div>
          </Link>


          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[16px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[20px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
        </div>

      </Wrapper>

    </header>
  )
}

export default Header