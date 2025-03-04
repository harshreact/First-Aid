import React from 'react'
import './Video.css'
import videoimg from '../../assets/Intro/intro-right.png'

const Video = () => {
  return (
    <section className="video pad-both">
        <div className='container'>
            <div className='video-main'>
                <div className='video-content'>
                    <h2>Lorem ipsum dolor <br/>
                        <span>
                            sit amet, consectetur
                        </span>
                    </h2>
                    <p>Vivamus at sapien porta, condimentum libero non, luctus orci. Curabitur malesuada, metus nec rhoncus bibendum, purus libero malesuada nisl, quis ultrices felis nulla a tellus. Nullam et commodo diam. Fusce facilisis nibh in feugiat molestie. Ut tempor massa vitae maximus suscipit. </p>
                </div>
                <div className='video-box'>
                    <img src={videoimg}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Video