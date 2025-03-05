import React from 'react'
import './Hero.css'
import hero from '../../assets/Hero/hero-banner.png'

const Hero = () => {
  return (
    <section className='hero black-bg'>
        <div className='container'>
            <div className='hero-main'>
                <div className='hero-content'>
                    <h1>Empowering Lifesavers of All Ages – <br/>
                        <span>
                            First Aid Training for Families, <br/> Schools, and Events!
                        </span>
                    </h1>
                    <div className='btn'>
                        <a href='#'>Contact</a>
                    </div>
                </div>
                <div className='hero-banner'>
                    <img src={hero} alt='hero-banner' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero