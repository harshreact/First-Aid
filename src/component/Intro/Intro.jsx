import React from 'react'
import './Intro.css'
import Limg from '../../assets/Intro/Intro-left.png'
import Rimg from '../../assets/Intro/intro-right.png'

const Intro = () => {
  return (
    <section className='intro peach-bg'>
        <div className='container'>
            <div className='intro-main pad-both'>
                <div className='left-intro'>
                    <h2>Welcome to <br/>
                        <span>
                            Red Fox Learning
                        </span>
                    </h2>
                    <div className='left-image'>
                        <img src={Limg} alt='intro-left'/>
                    </div>
                </div>
                <div className='right-intro'>
                    <p>At Red Fox Learning, based in Hartlepool, we’re passionate about empowering individuals, organisations, and communities with essential life-saving skills. Whether it’s a professional qualification, an engaging children’s workshop, or a fun and interactive activity at a festival, we provide high-quality first aid training tailored to your needs.</p>
                    <div className='right-image'>
                        <img src={Rimg} alt='intro-right'/>
                    </div>
                </div>    
            </div>
        </div>
    </section>
  )
}

export default Intro