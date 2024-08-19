import React from 'react'
import './NewsLetter.css'


export default function NewsLetter() {
    return (
        <div className='news_letter'>
            <h2>Get exclusive Offers in Your E-mail</h2>
            <p>subscribe our news letter and stay connect</p>
            <div className="news_input_button">
                <input type="email" placeholder='Write your e-mail' />
                <button>Submit</button>
            </div>
        </div>
    )
}
