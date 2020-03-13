import React, { Component } from 'react';
import axios from 'axios'; 

export default class CekiciEkle extends Component {
    constructor(props) {
        super(props);

        this.onChangeCekiciadi = this.onChangeCekiciadi.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            cekiciAdi: '',          
        }
    }

    onChangeCekiciadi(e) {
        this.setState({
            cekiciAdi: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const cekici = {
            cekiciAdi: this.state.cekiciAdi,
            
        }

        console.log(cekici);

        axios.post('http://localhost:5000/cekiciler/ekle', cekici)
            .then(res => console.log(res.data));

        this.setState({
            cekiciAdi: ''
        })
    }    

    render () {
        return (
            <div>
            <h3>Yeni Araç Ekle</h3>
            <form onSubmit={this.onSubmit}>
            <div className="form-group"> 
                <label>Plaka: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.cekiciAdi}
                    onChange={this.onChangeCekiciadi}
                    />
            </div>
            <div className="form-group">
                <input type="submit" value="Çekici Ekle" className="btn btn-primary" />
            </div>
            </form>
            </div>
        )
    }
}
