import React from 'react'
import { Col, Row } from 'react-bootstrap';

import { BsFillPeopleFill, BsVolumeUpFill, BsTools, BsEyeFill } from "react-icons/bs";

const Skills = () => {
    const imgStyle = {width: '2rem', height: '2rem'}

    return(
        <div style={{marginTop: '6rem'}}>
        <h4>What I possess?</h4>
        <Row className="d-flex justify-content-betweeen p-3" >
            <Col sm className='mr-2 '>
                <div className='d-flex align-items-center'>
                    <BsEyeFill style={imgStyle}/>
                    <h6 className='text-muted small m-3'> Identify, Brainstorm, Solve </h6>
                </div>
                <h6> Problem Solving </h6>
                <p> 
                    I am a very idealistic problem solver, with abilities to think outside the box. I can identify a problem, and 
                    figure out a solution to the problem.
                </p>
            </Col>
            <Col sm className=''>
                <div className='d-flex align-items-center'>
                    <BsTools style={imgStyle}/>
                    <h6 className='text-muted small m-3'> Innovate, Architect</h6>
                </div>
                <h6> Software Developer </h6>
                <p> 
                    I am a very talented software developer, with high levels of ethusiam and hard working individual, fueled by self
                    determination to provide computerised solution to world's problems. Talented with a great creativity.
                </p>
            </Col>
        </Row>
        <Row className="d-flex justify-content-betweeen p-3" >
            <Col sm className='mr-2 '>
                <div className='d-flex align-items-center'>
                    <BsVolumeUpFill style={imgStyle}/> 
                    <h6 className='text-muted small m-3'> Listen, Think, Serve </h6>
                </div>
                <h6> Leadership </h6>
                <p> 
                    I am a ready-to-listen somebody, you thinks before acting and who leads by serving. I am a strong believer of "do as I do" 
                    not "do as I say".
                </p>
            </Col>
            <Col sm className=''>
                <div className='d-flex align-items-center'>
                    <BsFillPeopleFill style={imgStyle}/>
                    <h6 className='text-muted small m-3'> Communicate, Collaborate </h6>
                </div>
                <h6> Teamwork </h6>
                <p> 
                    I believe in teamwork more than individual work. Many eyes see more clearly, therefore, every time I make sure, I don't work alone
                    but work as a team member.
                </p>
            </Col>
        </Row>
        </div>
    )
}

export default Skills;