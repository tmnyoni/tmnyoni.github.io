import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

const Nav_bar = (props) =>{
    return (
        <Container>
            <Navbar expand variant="light"  className='w-100 d-flex justify-content-end'> 
                <Navbar.Brand href="/" className='text-muted fst-italic small'>tmnyoni</Navbar.Brand>
            </Navbar>
        </Container>
    )
}

export default Nav_bar;