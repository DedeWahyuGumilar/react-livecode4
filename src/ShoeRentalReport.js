import { Component, useContext } from 'react';
import { Button, Table } from 'react-bootstrap';
import { ShoesContext } from './ShoeRental';

export class ShoeRentalReport extends Component  {
    static contextType = ShoesContext;

    render() {
        const {page, shoes} = this.context;

        return (
            <div className="row d-flex justify-content-center">
                      <div className="col-6">
                              <Button onClick={() => page = 'form' }>Shoe Rental Form</Button>
                               <Table className='table table-bordered <table-striped hover responsive'>
                                  <thead className="text-center p-0 py-3 text-bg-dark">
                                  <tr>
                                      <th>#</th>
                                      <th>Nama Sepatu</th>
                                      <th>Ukuran Sepatu</th>
                                      <th>Warna Sepatu</th>
                                      <th>Nama Peminjam</th>
                                      <th>Tgl. Pinjam</th>
                                      <th>Tgl. Kembali</th>
                                      <th>Total Bayar</th>
                                      <th>Total Denda</th>
                                      <th>Kondisi Sepatu</th>
                                      <th>Status</th>
                                  </tr>
                                  </thead>
                                  <tbody>
                                  {
                                      shoes.map((data) => {
                                      return (
                                          <tr>
                                          <td>{data.id}</td>
                                          <td>{data.shoe.name}</td>
                                          <td>{data.shoe.size}</td>
                                          <td>{data.shoe.color}</td>
                                          <td>{data.wearer}</td>
                                          <td>{data.borrowedAt}</td>
                                          <td>{data.returnedAt}</td>
                                          <td>{data.payment}</td>
                                          <td>{data.totalDenda}</td>
                                          <td>{data.fine}</td>
                                          <t>{data.status}</t>
                                          </tr>
                                      )
                                      })
                                  }
                              </tbody>
                          </Table>
                      </div>
                </div>
        )
    }
}