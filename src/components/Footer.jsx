import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

import SocialMedia from './SocialMedia'

const Footer = () => {
    return (
        <div style={{marginTop: '10rem'}}>
            <h4> More about me </h4>
            <Container>
                <Row sm className='d-flerx '>
                    <Col>
                        <p style={{textAlign: 'justify'}}>  
                            I spend most of my time doing programming. I work hard everyday to improve my skills.
                            But I also have other things I do besides being behind the monitor. I play tennis and 
                            I like spending some of my time teaching and learning from people in my circles.
                        </p>
                    </Col>
                    <Col>
                        <h6 className='text-center'>Social Media</h6>
                        <div>
                            <SocialMedia />
                        </div>
                    </Col>
                </Row>
                <div className='text-center' style={{marginTop: '5rem'}}>
                    <p className='small '> Copyright ©2021 Tawanda M. All rights reserved | Powered by Reactjs </p>
                </div>
            </Container>
        </div>
    )
}

export default Footer;