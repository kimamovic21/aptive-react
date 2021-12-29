import React from 'react'
import { FaDatabase } from 'react-icons/fa'
import './TestimonialsStyles.css'

const Testimonials = () => {
    return (
        <div className='testimonial'>
            <div className='container'>
                <div className='outline'>
                    <div className='content'>
                        <i><FaDatabase/>Staxx</i>
                        <p className='body'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                         Sed semper volutpat tellus tempus tincidunt. 
                         Vivamus maximus faucibus nibh, sed luctus sapien aoreet 
                         quis. Quisque quis velit sollicitudin, porta urna eu,
                          auctor mi.
                        </p>
                        <div className='name'>
                            <p>Marie Chilvers</p>
                            <p>CEO, Staxx</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
