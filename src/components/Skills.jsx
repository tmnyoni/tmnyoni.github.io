import React from 'react'
import { Card, Container, Row } from 'react-bootstrap';

const Skills = () => {
    return(
        <Row className="d-flex justify-content-betweeen" style={{marginTop: '6rem'}} >
            <Card sm className=''>
                <img src='' alt='..' />
                <h6>Thinker</h6>
                <p>I think very much, especially about ... </p>
            </Card>
            <Card sm className=''>
                <img src='' alt='..' />
                <h6>Thinker</h6>
                <p>I think very much, especially about ... </p>
            </Card>
        </Row>
    )
}

export default Skills;