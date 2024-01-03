/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import desktopTranform from '../../assets/desktop/image-transform.jpg'
import mobileTranform from '../../assets/mobile/image-transform.jpg'
import desktopStandout from '../../assets/desktop/image-stand-out.jpg'
import mobileStandout from '../../assets/mobile/image-stand-out.jpg'
import desktopGraphic from '../../assets/desktop/image-graphic-design.jpg'
import mobileGraphic from '../../assets/mobile/image-graphic-design.jpg'
import desktopPhotography from '../../assets/desktop/image-photography.jpg'
import mobilePhotography from '../../assets/mobile/image-photography.jpg'
import Emily from '../../assets/image-emily.jpg'
import Thomas from '../../assets/image-thomas.jpg'
import Jennie from '../../assets/image-jennie.jpg'
import desktopCone from '../../assets/desktop/image-gallery-cone.jpg'
import desktopMlik from '../../assets/desktop/image-gallery-milkbottles.jpg'
import mobileMilk from '../../assets/mobile/image-gallery-milkbottles.jpg'
import desktopSugar from '../../assets/desktop/image-gallery-sugarcubes.jpg'
import desktopOrage from '../../assets/desktop/image-gallery-orange.jpg'
import mobileOrage from '../../assets/mobile/image-gallery-orange.jpg'


class Main extends React.Component {

  render() {
    return (
      <main className='flex flex-col items-center'>
        {/* content 1 */}
        <div className='flex w-full max-lg:flex-col-reverse max-lg:items-center max-lg:w-full'>
          <div className='w-1/2 flex flex-col justify-center items-start px-36 max-lg:w-full max-lg:px-12 max-lg:text-center max-lg:items-center'>
            <h2 className=' font-Fraunces font-black text-6xl text-DarkBlue mb-9 max-lg:text-3xl'>Transform your brand</h2>
            <p className='text-VeryDarkGrayishBlue mb-9'>
              We are a full-service creative agency specializing in helping brands grow fast. 
              Engage your clients through compelling visuals that do most of the marketing for you.
            </p>
            <button className='uppercase font-Fraunces font-black text-DarkBlue rounded-lg p-2 hover:bg-yellow-300 transition-colors ease-in-out delay-200'>
              learn more
              <hr className='border-2 border-yellow-300'/>
            </button>
          </div>
          <picture>
            <source media="(min-width: 500px)" srcSet={desktopTranform} />
            <img src={mobileTranform} alt="tranform-img" />
          </picture>
        </div>
        {/* content 2 */}
        <div className='flex flex-row-reverse max-lg:flex-col-reverse max-lg:items-center w-full'>
          <div className='w-1/2 flex flex-col justify-center items-start px-36 max-lg:w-full max-lg:px-12 max-lg:text-center max-lg:items-center'>
            <h2 className=' font-Fraunces font-black text-6xl text-DarkBlue mb-9 max-lg:text-3xl'>Stand out to the right audience</h2>
            <p className='text-VeryDarkGrayishBlue mb-9'>
              Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.
            </p>
            <button className='uppercase font-Fraunces font-black text-DarkBlue rounded-lg p-2 hover:bg-red-400 transition-colors ease-in-out delay-200'>
              learn more
              <hr className='border-2 border-red-400'/>
            </button>
          </div>
          <picture>
            <source media="(min-width: 600px)" srcSet={desktopStandout} />
            <img src={mobileStandout} alt="tranform-img" />
          </picture>
        </div>
        {/* content 3 */}
        <div className='flex max-sm:flex-col'>
          <div className='relative'>
            <picture>
              <source media="(min-width: 600px)" srcSet={desktopGraphic} />
              <img src={mobileGraphic} alt="tranform-img" />
            </picture>
            <div className='absolute bottom-0 text-center text-DarkDesaturatedCyan px-36 py-12 max-lg:px-3'>
              <h3 className='text-4xl font-Fraunces font-black mb-12 max-lg:text-2xl '>Graphic Design</h3>
              <p className='tracking-wider font-bold '>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.</p>
            </div>
          </div>
          <div className='relative'>
            <picture>
              <source media="(min-width: 600px)" srcSet={desktopPhotography} />
              <img src={mobilePhotography} alt="tranform-img" />
            </picture>
            <div className='absolute bottom-0 text-center text-DarkBlue px-36 py-12 max-lg:px-3'>
              <h3 className='text-4xl font-Fraunces font-black mb-12 max-lg:text-2xl'>Photography</h3>
              <p className='tracking-wider font-bold'>  Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
            </div>
          </div>
        </div>
        {/* people's profile */}
        <div className='flex flex-col items-center justify-center gap-12 p-36 '>
          <b className='text-DarkGrayishBlue text-center text-3xl font-Fraunces tracking-widest'>CLIENT TESTIMONIALS</b>
          <div className='text-sm font-Barlow flex gap-6 max-lg:flex-col'>
            <div className='w-72 flex flex-col items-center text-center text-DarkBlue mx-4'>
              <img className='w-16 rounded-full mb-12' src={Emily} alt="avatar" />
              <p> We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
              <h3 className='mt-12 mb-3 text-xl font-Fraunces font-black'>Emily R.</h3>
              <p className='text-DarkGrayishBlue'>Marketing Director</p>
            </div>
            <div className='w-72 flex flex-col items-center text-center text-DarkBlue mx-4'>
              <img className='w-16 rounded-full mb-12' src={Thomas} alt="avatar" />
              <p>Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.</p>
              <h3 className='mt-12 mb-3 text-xl font-Fraunces font-black'>Thomas S.</h3>
              <p className='text-DarkGrayishBlue'>Cheif Operating Officer</p>
            </div>
            <div className='w-72 flex flex-col items-center text-center text-DarkBlue mx-4'>
              <img className='w-16 rounded-full mb-12' src={Jennie} alt="avatar" />
              <p>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
              <h3 className='mt-12 mb-3 text-xl font-Fraunces font-black'>Jennie F.</h3>
              <p className='text-DarkGrayishBlue'>Business Owner</p>
            </div>
          </div>
        </div>
        {/* last content */}
        <div className='flex max-lg:flex-col'>
          <div className='flex'>
            <picture>
              <source media="(min-width: 600px)" srcSet={desktopMlik} />
              <img src={mobileMilk} alt="milk" />
            </picture>
            <picture>
              <source media="(min-width: 600px)" srcSet={desktopOrage} />
              <img src={mobileOrage} alt="orange" />
            </picture>
          </div>
          <div className='flex'>
            <picture>
              <source media="(min-width: 600px)" srcSet={desktopCone} />
              <img src={desktopCone} alt="cone" />
            </picture>
            <picture>
              <source media="(min-width: 600px)" srcSet={desktopSugar} />
              <img src={desktopSugar} alt="sugar" />
            </picture>
          </div>
        </div>
      </main>
    )
  }
}

export default Main