import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import GiderListesi from "./components/gider-listesi.component";
import GiderDuzenle from "./components/gider-duzenle.component";
import YeniGider from "./components/yeni-gider.component";
import CekiciEkle from "./components/cekici-ekle.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={GiderListesi} />
      <Route path="/edit/:id" component={GiderDuzenle} />
      <Route path="/create" component={YeniGider} />
      <Route path="/cekici" component={CekiciEkle} />
      </div>      
    </Router>   
  );
}

export default App;
