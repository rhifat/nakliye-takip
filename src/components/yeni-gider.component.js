import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class YeniGider extends Component {
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
       axios.get('http://localhost:5000/cekiciler')
        .then(response => {
          if (response.data.length > 0){
            this.setState({
              cekiciler: response.data.map(cekici => cekici.cekiciAdi),
              cekiciAdi: response.data[0].cekiciAdi
          });
          }
        });
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
        axios.post('http://localhost:5000/giderler/ekle', gider)
            .then(res => console.log(res.data));


        window.location = '/';
    }

    render () {
        return (
            <div>
            <h3>Gider Ekle</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                <label>Çekici Seç: </label>
                <select ref="userInput"
                    required
                    className="form-control"
                    value={this.state.cekiciAdi}
                    onChange={this.onChangeCekiciadi}>
                    {
                      this.state.cekiciler.map(function(cekici) {
                        return <option 
                          key={cekici}
                          value={cekici}>{cekici}
                          </option>;
                      })
                    }
                </select>
              </div>
              <div className="form-group"> 
                <label>Gider Kalemi: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.giderKalemi}
                    onChange={this.onChangeGiderkalemi}
                    />
              </div>
              <div className="form-group">
                <label>Miktar ₺: </label>
                <input 
                    type="text" 
                    className="form-control"
                    value={this.state.miktar}
                    onChange={this.onChangeMiktar}
                    />
              </div>
              <div className="form-group">
                <label>İşlem Tarihi: </label>
                <div>
                  <DatePicker
                    selected={this.state.tarih}
                    onChange={this.onChangeTarih}
                  />
                </div>
              </div>
      
              <div className="form-group">
                <input type="submit" value="Yeni Gider Ekle" className="btn btn-primary" />
              </div>
            </form>
          </div>
        )
    }
}
