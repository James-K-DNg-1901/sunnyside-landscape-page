import React from 'react'
import logo from '../../assets/logo.svg'
import fb from '../../assets/icon-facebook.svg'
import ig from '../../assets/icon-instagram.svg'
import tw from '../../assets/icon-twitter.svg'
import pin from '../../assets/icon-pinterest.svg'

class index extends React.Component {
  render() {
    return (
      <footer>
        <div className='w-full bg-DarkModerateCyan flex flex-col items-center py-20 gap-12'>
          <img className='fill-DarkDesaturatedCyan' src={logo} alt="logo" />
          <div className='flex gap-20 max-lg:gap-8'>
            <a className='jkd-footer'>About</a>
            <a className='jkd-footer'>Services</a>
            <a className='jkd-footer'>Projects</a>
          </div>
          <div className='flex gap-12 max-lg:gap-8 my-8 '>
            <img className='jkd-footer-icon' src={fb} alt="fb" />
            <img className='jkd-footer-icon' src={ig} alt="ig" />
            <img className='jkd-footer-icon' src={tw} alt="tw" />
            <img className='jkd-footer-icon' src={pin} alt="pin" />
          </div>
        </div>
      </footer>
    )
  }
}

export default index