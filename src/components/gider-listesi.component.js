import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Gider = props => (
    <tr>
        <td>{props.gider.cekiciAdi}</td>
        <td>{props.gider.giderKalemi}</td>
        <td>{props.gider.miktar}</td>
        <td>{props.gider.tarih.substring(0, 10)}</td>
        <td>
        <Link to={"/duzenle/"+props.gider._id}>düzenle</Link> | <a href="#" onClick={() => { props.deleteGider(props.gider._id) }}>sil</a>
        </td>
    </tr>
)

export default class GiderListesi extends Component {
    constructor(props){
        super(props);

        this.deleteGider = this.deleteGider.bind(this);

        this.state = {giderler: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/giderler/')
            .then(response => {
                this.setState({giderler : response.data})
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteGider(id){
        axios.delete('http://localhost:5000/giderler'+id)
            .then(res => console.log(res.data));
            
        this.setState({
            giderler: this.state.giderler.filter(el => el._id !== id)
        })
    }

    giderlerListesi() {
        return this.state.giderler.map(simdikigider => {
            return <Gider gider={simdikigider} deleteGider={this.deleteGider} key={simdikigider._id} />;
        })
    }

    render () {
        return (
        <div>
        <h3>Giderler</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Çekici</th>
              <th>Masraf Tipi</th>
              <th>Miktar</th>
              <th>Tarih</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            { this.giderlerListesi() }
          </tbody>
        </table>
      </div>
        )
    }
}


