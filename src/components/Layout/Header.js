import React from 'react'
import Link from 'gatsby-link'
import { Container, Navbar, Nav, NavDropdown} from 'react-bootstrap'
import { FiShoppingBag, FiMenu} from 'react-icons/fi'

import CartCount from './CartCount'
import MobileNavbar from './MobileNavbar'
import SearchBar from './SearchBar'

import '../../style/index.scss'

class Header extends React.Component {
  
  constructor() {
    super();

    this.state = {
      display: false
    }
  }

  showNavbar() {
    this.setState({ display: !this.state.display })
  }

  render() {
    let nav_class = this.state.display ? "isShown" : "isHidden";

    return (
      <div>
        <Navbar collapseOnSelect expand="md" fixed="top">
          <Container>
          <Navbar.Brand>
            <Link to={`${this.props.baseURL}`}>
              {this.props.title}
            </Link>
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <NavDropdown title="SHOP" id="basic-nav-dropdown">
              {
                 this.props.subMenuLinks.map((index) => (            
                  <NavDropdown.Item href={`${index.link}`} key={index.name}>{index.name}</NavDropdown.Item>
              ))
            }
                <NavDropdown.Divider />
                <NavDropdown.Item href={`${this.props.lastSubMenuLink.link}`}>{this.props.lastSubMenuLink.name}</NavDropdown.Item>
              </NavDropdown>
              {
                 this.props.menuLinks.map((index) => (            
                 <Nav.Item key={index.name}><Link to={`${index.link}`}>{index.name}</Link></Nav.Item>
              ))
            }
            <Nav.Item>
              <SearchBar searchIndex={this.props.searchIndex}/>
            </Nav.Item>
          </Nav>
          </Navbar.Collapse>
          <Nav className="icons">
            <Nav.Item>
              <FiShoppingBag className="fi-icons" />
              <span><Link to="/cart">CART (<CartCount/>)</Link></span>
            </Nav.Item>
          </Nav>
          <button className="navbar-toggle"
            onClick={this.showNavbar.bind(this)}>
            <FiMenu className="nav-toggle-icon" />
          </button>
          </Container>
        </Navbar>
        <div id="navbar-mobile" className={nav_class}>
          <MobileNavbar menuLinks={this.props.menuLinks} subMenuLinks={this.props.subMenuLinks} searchIndex={this.props.searchIndex}/>
        </div>
      </div>
    )
  }
}

export default Header
