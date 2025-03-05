import React from 'react'
import './WeAre.css'
import weare from '../../assets/WeAre/weare.png'
const WeAre = () => {
  return (
    <section className="we-are pad-both">
        <div className='container'>
            <div className='we-are-main'>
                <div className='we-are-image'>
                    <img src={weare} alt=''/>
                </div>
                <div className='we-are-content'>
                    <h2>Who <span>We Are</span></h2>
                    <p>Red Fox Learning is a newly established business that complements our existing Mini First Aid franchise. This expansion enables us to offer a broader range of services across a wider area, ensuring everyone can access the training they need. With a solid foundation of experience in delivering first aid education, we’re dedicated to making first aid accessible, engaging, and practical for all ages.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WeAre