import React from 'react'
import Link from 'gatsby-link'
import { Container, Nav } from 'react-bootstrap'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'

import SearchBar from './SearchBar'
import '../../style/index.scss'

class MobileNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         fullWidth: false
        }
    }

    swipeNavbar() {
        this.setState({ fullWidth: !this.state.fullWidth })
      }

render() { 
    let swipe_class = this.state.fullWidth ? "swipeRight" : "noWidth";
    return (
        <>
        <Nav className="flex-column flex-mobile-nav">
          <Container>
            <Nav.Item className="navbar-mobile-item" onClick={this.swipeNavbar.bind(this)}>shop<FiChevronRight className="mobile-nav-icon" /></Nav.Item>
            {
                 this.props.menuLinks.map((index) => (
                 <Nav.Item className="navbar-mobile-item" key={index.name}><Link to={`${index.link}`}>{index.name}</Link> <FiChevronRight className="mobile-nav-icon" /></Nav.Item>
                ))
            } 
          </Container>
        </Nav>

        <Nav className="flex-column flex-mobile-nav swipe-nav" id={swipe_class}>
          <Container>
            <Nav.Item className="navbar-mobile-item text-center" onClick={this.swipeNavbar.bind(this)}><FiChevronLeft className="mobile-nav-icon float-left" />SHOP</Nav.Item>
            <Nav.Item className="navbar-mobile-item text-center"><Container><SearchBar searchIndex={this.props.searchIndex}/> </Container></Nav.Item>
            <hr/>
            <Nav.Item className="navbar-mobile-item"><Link to="/shop/all">shop all</Link> <FiChevronRight className="mobile-nav-icon" /></Nav.Item>
            {
                 this.props.subMenuLinks.map((index) => (            
                 <Nav.Item className="navbar-mobile-item" key={index.name}><Link to={`${index.link}`}>{index.name}</Link> <FiChevronRight className="mobile-nav-icon" /></Nav.Item>
              ))
            }       
            </Container>
        </Nav>
        </>
        )
    }
}
export default MobileNavbar 