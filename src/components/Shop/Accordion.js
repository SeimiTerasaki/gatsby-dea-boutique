
import React from 'react'
import {Accordion, Card} from 'react-bootstrap'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

import '../../style/index.scss'


class AccordionDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        arrownDown: true
        }
    }

render() { 
    return (
    <Accordion>
    <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0" onClick={()=>this.setState({ arrowDown: !this.state.arrowDown })}>
        Size & Quality
            <span className="float-right">
                { this.state.arrowDown
                    ? <FiChevronDown />
                    : <FiChevronUp />
                }
            </span>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
        <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Card.Body>
        </Accordion.Collapse>
    </Card>
    <Card>
        <Accordion.Toggle as={Card.Header} eventKey="1" onClick={()=>this.setState({ arrowDown: !this.state.arrowDown})}>
        About the Brand
        <span className="float-right">
            { this.state.arrowDown
                    ? <FiChevronDown />
                    : <FiChevronUp />
            }
            </span>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
        <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Card.Body>
        </Accordion.Collapse>
    </Card>
    <Card>
        <Accordion.Toggle as={Card.Header} eventKey="2" onClick={()=>this.setState({ arrowDown: !this.state.arrowDown})}>
       Shipping & Returns
       <span className="float-right">
         { this.state.arrowDown
            ? <FiChevronDown />
            : <FiChevronUp />
            }
        </span>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2">
        <Card.Body>Returns are accepted ​on this product within 30 days of receipt. Item must be returned unused, with tags, in its original packaging, along with a completed return form.</Card.Body>
        </Accordion.Collapse>
    </Card>
</Accordion>

)
}
}

export default AccordionDropdown