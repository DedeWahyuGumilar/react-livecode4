import { Component, createContext } from "react";
import { Col, Row } from "react-bootstrap";
import { ShoeRentalReport } from "./ShoeRentalReport";
import { ShoeRentalForm } from "./ShoeRentalForm";



const ShoesContext = createContext;

export class ShoeRental extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            page: 'report',
            shoes: [
                {
                    id:1,
                    shoe: {
                        id:1,
                        name: 'Nike',
                        color: 'Black',
                        size: 21,
                        condition: 'Good'
                    },
                    wearer: '',
                    duration: 0,
                    borrowedAt: 0,
                    returnedAt: 0,
                    payment: 0,
                    fine: '',
                    status: 1
                }
            ]
        }

    }

    render() {
        const {page} = this.state;
        let elements = (
            <Col xs="12">
                <h2 className="pb-2 md-4 border-bottom border-5 border-danger d-inline-block">Shoes Rental</h2>
            </Col>
        )
        if (page === 'report') {return (
            <Row as ="section" className="mx-5 my-3">
                {elements}
                <ShoesContext.Provider value={this.state}>        
                    <ShoeRentalReport />
                </ShoesContext.Provider>
            </Row>
        )
    } else if(page === 'form'){
        return (
            <Row as ="section" className="mx-5 my-3">
                {elements}
                <ShoesContext.Provider value={this.state}>        
                    <ShoeRentalForm />
                </ShoesContext.Provider>
            </Row>
        )
   } else {
        return (
            <Row as ="section" className="mx-5 my-3">
                {elements}
            </Row>
        )
   }
}
}