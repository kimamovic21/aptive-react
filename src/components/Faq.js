import React from 'react'
import './FaqStyles.css'

const Faq = () => {
    return (
        <div className='section-faq'>
            <div className='container'>
                <div className='col-1'>
                    <h3>Frequently asked question</h3>
                    <p>Can't find answer you're looking for?</p>
                    <p>Reach out to our <span>customer support</span> team.</p>
                </div>
                <div className='col-2'>
                    <div className='faq'>
                        <h5>Lorem ipsum dolor sit amet</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                           Nullam in sollicitudin tortor.</p>
                    </div>
                    <div className='faq'>
                        <h5>Lorem ipsum dolor sit amet</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                           Nullam in sollicitudin tortor.</p>
                    </div>
                    <div className='faq'>
                        <h5>Lorem ipsum dolor sit amet</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                           Nullam in sollicitudin tortor.</p>
                    </div>
                    <div className='faq'>
                        <h5>Lorem ipsum dolor sit amet</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                           Nullam in sollicitudin tortor.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq
