import React from 'react'
import './Footer.css'

import logo from '../../assets/Header/logo.png'
import facebook from '../../assets/Footer/facebook.png'
import instagram from '../../assets/Footer/instagrem.png'
import twitter from '../../assets/Footer/twitter.png'
import linkedin from '../../assets/Footer/linkdin.png'
import company1 from '../../assets/Footer/company-1.png'
import company2 from '../../assets/Footer/company-2.png'
import company3 from '../../assets/Footer/company-3.png'
import marker from '../../assets/Footer/location.png'
import phone from '../../assets/Footer/call.png'
import email from '../../assets/Footer/email.png'

const Footer = () => {
  return (
    <div className=" footer black-bg">
        <div className='container'>
            <div className='footer-main'>
                <div className='work'>
                    <div className='work-main'>
                        <div className='work-left'>
                            <h2>Work With Us</h2>
                            <p>If you’re a school, organisation, or festival organiser looking for a trusted partner to deliver first aid training, get in touch! We’d love to help you create a safer, more prepared community.</p>
                        </div>
                        <div className='white-btn'>
                            <a href='#'>Contact Us</a>
                        </div>
                    </div>
                </div>
                <div className='footer-content'>
                    <div className='footer-company'>
                        <div className='footer-logo'>
                            <img src={logo} alt='footer-logo'/>
                        </div>
                        <div className='text'>
                            <p>Aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.</p>
                        </div>
                        <div className='social'>
                            <div className='social-icon-box'>
                                <img src={facebook} alt='facebook'/>
                            </div>
                            <div className='social-icon-box'>
                                <img src={instagram} alt='facebook'/>
                            </div>
                            <div className='social-icon-box'>
                                <img src={linkedin} alt='facebook'/>
                            </div>
                            <div className='social-icon-box'>
                                <img src={twitter} alt='facebook'/>
                            </div>
                        </div>
                    </div>
                    <div className='quicklinks'>
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href='#'>About Us</a></li>
                            <li><a href='#'>Service</a></li>
                            <li><a href='#'>Blog</a></li>
                            <li><a href='#'>Contact Us</a></li>
                        </ul>
                    </div>
                    <div className='contact'>
                        <h4>Contact Info</h4>
                        <ul>
                            <li>
                                <img src={marker}/>
                                <a href='#'>5 Topaz Close, Hartlepool, TS24 0GL</a>
                            </li>
                            <li>
                                <img src={phone}/>
                                <a href='#'>07384556282</a>
                            </li>
                            <li>
                                <img src={email}/>
                                <a href='#'>deborahfairbotham@yahoo.co.uk</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='footer-bottom'>
                    <p>Copyright 2024 Red Fox Learning | Design By Red Fox Learning. All Rights Reserved </p>
                    <div className='footer-bottom-wrapper'>
                        <p>Website build by Like Us Ltd through the Tees Valley Digital Transformation programme. Delivered on behalf of the  Tees Valley Mayor and Combined Authority and fully by the UK Government through the UK Shared Prosperity Fund.</p>
                        <div className='parter-logo'>
                            <div className='company-logo'>
                                <img src={company1} alt='company1'/>
                            </div>
                            <div className='company-logo'>
                                <img src={company2} alt='company2'/>
                            </div>
                            <div className='company-logo'>
                                <img src={company3} alt='company3'/>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer