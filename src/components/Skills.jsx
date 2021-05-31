import React from 'react'
import { Col, Row } from 'react-bootstrap';

import { PeopleFill, VolumeUpFill, Tools, EyeFill } from 'react-bootstrap-icons';

const Skills = () => {
    const imgStyle = {width: '2rem', height: '2rem', color: 'grey'};
    const textJustify = {textAlign: 'justify'};

    return(
        <div style={{marginTop: '10rem'}}>
            <h4>What I possess...</h4>
            <Row className="d-flex justify-content-betweeen p-3" >
                <Col sm className='mr-2 '>
                    <div className='d-flex align-items-center'>
                        <EyeFill style={imgStyle}/>
                        <h6 className='text-muted small m-3'> Identify, Brainstorm, Solve </h6>
                    </div>
                    <h6> Problem Solving </h6>
                    <p style={textJustify}> 
                        I am a very idealistic problem solver, with abilities to think outside the box. I can identify a problem, 
                        figure out a solution to the problem, and implement the solution.
                    </p>
                </Col>
                <Col sm className=''>
                    <div className='d-flex align-items-center'>
                        <Tools style={imgStyle}/>
                        <h6 className='text-muted small m-3'> Innovate, Architect</h6>
                    </div>
                    <h6> Software Developer </h6>
                    <p style={textJustify}> 
                        I am a very talented software engineer, with high levels of enthusiasm and a hardworking individual,
                        fueled by self-determination to provide a computerised solution to the world's problems. Talented with great creativity.
                    </p>
                </Col>
            </Row>
            <Row className="d-flex justify-content-betweeen p-3" >
                <Col sm className=''>
                    <div className='d-flex align-items-center'>
                        <PeopleFill style={imgStyle}/>
                        <h6 className='text-muted small m-3'> Communicate, Collaborate </h6>
                    </div>
                    <h6> Teamwork </h6>
                    <p> 
                        I believe in teamwork more than individual work. Many eyes see more clearly, thus, every time I make sure, I don't work alone
                        but work as a team member.
                    </p>
                </Col>
                <Col sm className='mr-2 '>
                    <div className='d-flex align-items-center'>
                        <VolumeUpFill style={imgStyle}/> 
                        <h6 className='text-muted small m-3'> Listen, Think, Serve </h6>
                    </div>
                    <h6> Leadership </h6>
                    <p style={textJustify}> 
                        I am a ready-to-listen somebody, who thinks before acting and who leads by serving. I am a strong believer in "do as I do" 
                        not "do as I say".
                    </p>
                </Col>
            </Row>
        </div>
    )
}

export default Skills;