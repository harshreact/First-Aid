import React from 'react'
import './Services.css'
import image1 from '../../assets/Services/services-1.png'
//import image2 from '../../assets/Services/services-2.png'

const Services = () => {
  return (
    <section className="services peach-bg">
        <div className="container">
            <div className="services-main pad-both">
                <div className="services-left">
                    <h2>Our <span>Services</span></h2>
                    <div className='pointers'>
                        <div className='point'>
                            <h3>First Aid Qualifications :</h3>
                            <p>Comprehensive training for individuals, businesses, and organisations, delivered in both open and private settings.</p>
                        </div>
                        <div className='point'>
                            <h3>Children’s First Aid Classes :</h3>
                            <p>Engaging, age-appropriate workshops for schools, youth groups, and activity providers like Scouts and gymnastics clubs.</p>
                        </div>
                        <div className='point'>
                            <h3>Festival & Outdoor Event Packages :</h3>
                            <p>Unique first aid activity sessions designed to entertain and educate attendees of all ages.</p>
                        </div>
                        <div className='point'>
                            <h3>Non-Qualification First Aid Classes :</h3>
                            <p>Ideal for community groups or anyone seeking essential life-saving knowledge without formal certification.</p>
                        </div>
                    </div>
                </div>
                <div className="services-right">
                    <img src={image1} alt="Services" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services