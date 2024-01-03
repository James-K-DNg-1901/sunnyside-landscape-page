import React from 'react'
import '../../index.css'
import arrow from '../../assets/icon-arrow-down.svg'
import logo from '../../assets/logo.svg'
import menu from '../../assets/icon-hamburger.svg'
import desktopHeader from '../../assets/desktop/image-header.jpg'
import mobileHeader from '../../assets/mobile/image-header.jpg'

class Header extends React.Component {


  menuHandle = () => {
    document.getElementById('menu').classList.toggle('max-lg:-right-80')
    document.getElementById('menu').classList.toggle('max-lg:right-12')
  }

  render() {
    return (
      <header>
        <picture>
          <source media="(min-width: 600px)" srcSet={desktopHeader} />
          <img className="relative" src={mobileHeader} alt="header-img" />
        </picture>
        
        <div className=" absolute top-0 w-full flex flex-col justify-start h-desktop p-6">
          <div className='flex justify-between items-center mb-28 max-lg:mb-12'>
            <img src={logo} alt="icon-logo" />
            <div id='menu' className="jkd-menu max-lg:-right-80 duration-700 delay-100 ease-in-out translate-x">
              <button className="jkd-button">About</button>
              <button className="jkd-button">Services</button>
              <button className="jkd-button">Project</button>
              <button className="font-Fraunces font-bold uppercase jkd-button">Contact</button>
            </div>
            {/* mobile menu */}
            <div onClick={() => this.menuHandle()} className="cursor-pointer jkd-button lg:hidden">
             <img src={menu} alt="icon-menu" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="font-Fraunces font-bold text-6xl text-white text-center tracking-widest mb-20 max-lg:mb-2">we are creatives</h1>
            <img className="w-8" src={arrow} alt="icon-arrow" />
          </div>
        </div>
       </header>
    )
  }
}

export default Header