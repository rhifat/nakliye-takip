import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class GiderDuzenle extends Component {
    constructor(props) {
        super(props);

        this.onChangeCekiciadi = this.onChangeCekiciadi.bind(this);
        this.onChangeGiderkalemi = this.onChangeGiderkalemi.bind(this);
        this.onChangeMiktar = this.onChangeMiktar.bind(this);
        this.onChangeTarih = this.onChangeTarih.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            cekiciAdi: '',
            giderKalemi: '',
            miktar: 0,
            tarih: new Date(),
            cekiciler: []
        }
    }

  componentDidMount() {
    axios.get('http://localhost:5000/giderler/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          cekiciAdi: response.data.cekiciAdi,
          giderKalemi: response.data.giderKalemi,
          miktar: response.data.miktar,
          tarih: new Date(response.data.tarih)
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5000/cekiciler/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            cekiciler: response.data.map(cekici => cekici.cekiciAdi),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

 

  onChangeCekiciadi(e) {
    this.setState({
        cekiciAdi: e.target.value
    });
}

onChangeGiderkalemi(e) {
    this.setState({
        giderKalemi: e.target.value
    });
}

onChangeMiktar(e) {
    this.setState({
        miktar: e.target.value
    });
}

onChangeTarih(date) {
    this.setState({
        tarih: date
    });
}

onSubmit(e) {
    e.preventDefault();

    const gider = {
        cekiciAdi: this.state.cekiciAdi,
        giderKalemi: this.state.giderKalemi,
        miktar: this.state.miktar,
        tarih: this.state.tarih
    }

    console.log(gider);

    axios.post('http://localhost:5000/giderler/duzenle', this.props.match.params.id, gider)
        .then(res => console.log(res.data));


    window.location = '/';
}

  render() {
    return (
    <div>
      <h3>Gider Düzenle</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Çekici: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.cekiciAdi}
              onChange={this.onChangeCekiciadi}>
              {
                this.state.users.map(function(cekici) {
                  return <option 
                    key={cekici}
                    value={cekici}>{cekici}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Masraf Tipi: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.giderKalemi}
              onChange={this.onChangeGiderkalemi}
              />
        </div>
        <div className="form-group">
          <label>Tutar ₺: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.miktar}
              onChange={this.onChangeMiktar}
              />
        </div>
        <div className="form-group">
          <label>Tarih: </label>
          <div>
            <DatePicker
              selected={this.state.tarih}
              onChange={this.onChangeTarih}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Gider Düzenle" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}