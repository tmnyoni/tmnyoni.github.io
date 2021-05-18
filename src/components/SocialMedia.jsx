import React from 'react'

import linkedin from '../assets/img/linkedin.png'
import github from '../assets/img/github.png'
import telegram from '../assets/img/telegram.svg'

const SocialMedia = () => {
    return(
        <div className='d-flex justify-content-center'>
            <img src={linkedin} alt=""  style={{width: '2rem', height: '2rem', marginRight: '0.5rem'}}/>
            <img src={github} alt=""  style={{width: '2rem', height: '2rem', marginRight: '0.5rem'}}/>
            <img src={telegram} alt=""  style={{width: '2rem', height: '2rem', marginRight: '0.5rem'}}/>
        </div>
    )
}

export default SocialMedia;