import React from 'react'
import {Card, Button, Row} from 'react-bootstrap'

import profImg from '../assets/img/profile.jpg'

const Profile = (props) =>{
    return (
        <Row className='d-flex align-items-center justify-content-center text-center' style={{marginTop: '5rem'}}>
            <img src={profImg} alt='profile' style={{width: '16rem', height: '15rem'}} className='rounded-circle'/>
            <Card style={{ width: '30rem' }} className='border-0'>
                <Card.Body>
                    <Card.Text>Software Engineer and Developer</Card.Text>
                    <Card.Title style={{fontSize: '3rem'}}>Tawanda M.</Card.Title>
                    <Card.Text>
                        Well desciplined, passionate software engineer, armed with deep sense of responsibility to 
                        give one hundred percent in any endeavour.
                    </Card.Text>
                    <Button variant="outline-secondary" size='sm' className='mx-1 rounded-pill'>Download CV</Button>
                    <Button variant="outline-secondary" size='sm' className='mx-1 rounded-pill'>Projects</Button>
                </Card.Body>
            </Card>
        </Row>
    )
}
export default Profile;

