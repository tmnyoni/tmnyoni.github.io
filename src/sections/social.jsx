import React from 'react'

import linkedin from '../assets/img/linkedin.png'
import github from '../assets/img/github.png'
import telegram from '../assets/img/telegram.svg'
import whatsapp from '../assets/img/whatsapp.png'
import instagram from '../assets/img/instagram.jpeg'

const SocialMedia = () => {
    return(
        <div className='d-flex justify-content-center'>
            <img src={linkedin} alt=""  style={{width: '2rem', height: '2rem', marginRight: '2rem'}}/>
            <img src={github} alt=""  style={{width: '2rem', height: '2rem', marginRight: '2rem'}}/>
            <img src={telegram} alt=""  style={{width: '2rem', height: '2rem', marginRight: '2rem'}}/>
            <img src={whatsapp} alt=""  style={{width: '2rem', height: '2rem', marginRight: '2rem'}}/>
            <img src={instagram} alt=""  style={{width: '2rem', height: '2rem', marginRight: '2rem'}}/>
        </div>
    )
}

export default SocialMedia;