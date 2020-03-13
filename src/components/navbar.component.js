import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Eflatun Lojistik Takip</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Giderler</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Gider Ekle</Link>
          </li>
          <li className="navbar-item">
          <Link to="/cekici" className="nav-link">Arac Ekle</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}