import React from 'react'
import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { useRouter } from 'next/router'

const nfaDependencyVersion =
  require('../package.json').dependencies['next-firebase-auth']
const nextDependencyVersion = require('../package.json').dependencies.next
const firebaseDependencyVersion =
  require('../package.json').dependencies.firebase

const Header = ({ email, signOut }) => {
  const router = useRouter()

  return (
    <div>

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">innerKore Platform</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/how-to-build" className={router.pathname == "/how-to-build" ? 'active' : null}>How to build</Nav.Link>
              <Nav.Link href="/partner-program" className={router.pathname == "/partner-program" ? 'active' : null}>Partner program</Nav.Link>
              <Nav.Link href="/docs" className={router.pathname == "/docs" ? 'active' : null}>Documentation</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/" className={router.pathname == "/" ? 'active' : null}>My Integrations</Nav.Link>
              <Nav.Link href="/templates" className={router.pathname == "/templates" ? 'active' : null}>Templates</Nav.Link>
              <Nav.Link>
                {email ? (
                  <NavDropdown title={email} id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Zapier.com</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4" onClick={() => {
                      signOut()
                    }}>Sign out</NavDropdown.Item>
                  </NavDropdown>

                ) : (
                  <Link href="/auth">
                    <a>
                      <button type="button">
                        Sign in
                      </button>
                    </a>
                  </Link>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
