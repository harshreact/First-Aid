import React from 'react'
import './ChooseUs.css'
import chooseus from '../../assets/ChooseUs/choosus.png'

const ChooseUs = () => {
  return (
    <section className="choose-us pad-both">
        <div className='container'>
            <div className='choose-us-main'>
                <div className='choose-us-left'>
                    <img src={chooseus} alt='ChooseUs'/>
                </div>
                <div className='choose-us-right'>
                    <h2>Why <span>Choose Us?</span></h2>
                    <div className='pointers'>
                        <div className='point'>
                            <div className='title_h3'>Flexible Training Options :</div>
                            <p>We deliver sessions where and when you need them – in workplaces, schools, community centres, or at your events.</p>
                        </div>
                        <div className='point'>
                            <h3 className='title_h3'>Tailored Approach :</h3>
                            <p>Our classes are customised to suit the audience, from children learning the basics to adults seeking accredited qualifications.</p>
                        </div>
                        <div className='point'>
                            <h3 className='title_h3'>Professional Expertise :</h3>
                            <p>With years of experience in first aid training, we ensure every session is engaging, practical, and easy to understand.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ChooseUs