import { Component } from "react";
import { Row, Col, Form, Button, Card } from "react-bootstrap";

export class Shoe {
    constructor(id, name, color, size, condition) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.size = size;
        this.condition = condition;
    }
  }
  
  export class Transaction {
    constructor(id, shoe, wearer, duration, borrowedAt, returnedAt, payment, fine, status) {
        this.id = id;
        this.shoe = shoe;
        this.wearer = wearer;
        this.duration = duration;
        this.borrowedAt = borrowedAt;
        this.returnedAt = returnedAt;
        this.payment = payment;
        this.fine = fine;
        this.status = status;
    }
  }

export class ShoeRentalForm extends Component {

    handleValueChange(fieldName, field) {
        const fields = Object.keys(this.state.form);

        if(fields.includes(fieldName)) {
            const {target: {value}} = field;
        
            this.setState({
                form: {...this.state.form, [fieldName]: value}
            })
        }
    }

    handleFormSubmit(form) {
        const {shoes} = this.context;
        const transaction = new Transaction("1", new Shoe("Air Jordan", "Hitam", "45", "Good"), "Dede", 1, 9, 10, 0, 1, "baik");
        const {shoe} = {...transaction, shoe: {...transaction}};
        shoes.push(shoe);
    }

    render() {
        return(
            <>
                <div className="row d-flex justify-content-center">
                    <div className="col-6">
                        <h5>Shoe Form</h5>
                        <Row as="section" className="mx-5 my-3">
                            <Form onSubmit={(e) => this.handleFormSubmit(e)}>
                                <Card.Body>
                                    <Form.Group className="mb-3" as="row">
                                        <Col sm="3">
                                            <Form.Label>Sepatu</Form.Label>
                                        </Col>
                                        <Col sm="9">
                                        <Form.Select id="durasi" size="sm" value={form.sepatu}
                                            onChange={(e) => this.handleValueChange('sepatu', e)}>
                                                <option>Converse</option>
                                                <option>Nike</option>
                                                <option>Jordan</option>
                                            </Form.Select>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group className="mb-3" as="row">
                                        <Col sm="3">
                                            <Form.Label>Ukuran Sepatu</Form.Label>
                                        </Col>
                                        <Col sm="9">
                                            <Form.Control id="ukuranSepatu" placeholder="Ukuran Sepatu" value={form.ukuranSepatu} onChange={(e) => this.handleValueChange('ukuranSepatu', e)}/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group className="mb-3" as="row">
                                        <Col sm="3">
                                            <Form.Label>Warna Sepatu</Form.Label>
                                        </Col>
                                        <Col sm="9">
                                            <Form.Control id="warnaSepatu" placeholder="Warna Sepatu" value={form.warnaSepatu} onChange={(e) => this.handleValueChange('warnaSepatu', e)}/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group className="mb-3" as="row">
                                        <Col sm="3">
                                            <Form.Label>Nama Peminjam</Form.Label>
                                        </Col>
                                        <Col sm="9">
                                            <Form.Control id="namaPeminjam" placeholder="Nama Peminjam" value={form.namaPeminjam} onChange={(e) => this.handleValueChange('namaPeminjam', e)}/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group className="mb-3" as="row">
                                        <Col sm="3">
                                            <Form.Label>Tgl. Pinjam</Form.Label>
                                        </Col>
                                        <Col sm="9">
                                            <Form.Control id="tglPinjam" placeholder="Tgl. Pinjam" value={form.tglPinjam} onChange={(e) => this.handleValueChange('tglPinjam', e)}/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group className="mb-3" as="row">
                                        <Col sm="3">
                                            <Form.Label>Durasi</Form.Label>
                                        </Col>
                                        <Col sm="9">
                                            <Form.Select id="durasi" size="sm" value={form.durasiPinjam}
                                            onChange={(e) => this.handleValueChange('durasiPinjam', e)}>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </Form.Select>
                                        </Col>
                                    </Form.Group>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="primary" type="submit"> Save </Button>
                                </Card.Footer>
                            </Form>
                        </Row>
                    </div>
                </div>
            </>
      )
    }
}