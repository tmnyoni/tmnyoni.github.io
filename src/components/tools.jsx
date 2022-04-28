import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'

const Tools = () => {
    return (
        <div style={{ marginTop: '10rem' }}>
            <h4>What I do... </h4>
            <CardGroup className='text-center m-2 mt-3 '>
                <Card className='m-2 border shadow' style={{ height: '20rem' }}>
                    <Card.Body className='d-flex flex-column justify-content-center'>
                        <Card.Title> Desktop App Developer </Card.Title>
                        <Card.Text>
                            I develop desktop applications to serve,
                            different tasks.
                        </Card.Text>
                        <Card.Text>
                            Using: C++, JavaScript
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='m-2 border shadow' style={{ height: '20rem' }}>
                    <Card.Body className='d-flex flex-column justify-content-center'>
                        <Card.Title> Web Development </Card.Title>
                        <Card.Text>
                            I develop websites and web applications to suite your
                            business model.
                        </Card.Text>
                        <Card.Text>
                            Using: Django, React, Bootstrap
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='m-2 m-2 border shadow' style={{ height: '20rem' }}>
                    <Card.Body className='d-flex flex-column justify-content-center'>
                        <Card.Title> UI/UX Designer </Card.Title>
                        <Card.Text>
                            I am armed with great creativity, that enables me to
                            create wonderful UI designs.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    )
}

export default Tools;