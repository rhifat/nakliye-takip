(this["webpackJsonpnakliye-takip"]=this["webpackJsonpnakliye-takip"]||[]).push([[0],{161:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(35),r=a.n(l),c=a(24),o=a(25),s=(a(82),a(15)),m=a(16),u=a(18),h=a(17),d=a(19),k=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg"},i.a.createElement(c.b,{to:"/",className:"navbar-brand"},"Eflatun Lojistik Takip"),i.a.createElement("div",{className:"collpase navbar-collapse"},i.a.createElement("ul",{className:"navbar-nav mr-auto"},i.a.createElement("li",{className:"navbar-item"},i.a.createElement(c.b,{to:"/",className:"nav-link"},"Giderler")),i.a.createElement("li",{className:"navbar-item"},i.a.createElement(c.b,{to:"/create",className:"nav-link"},"Gider Ekle")),i.a.createElement("li",{className:"navbar-item"},i.a.createElement(c.b,{to:"/cekici",className:"nav-link"},"Arac Ekle")))))}}]),t}(n.Component),g=a(6),b=a(11),E=a.n(b),p=function(e){return i.a.createElement("tr",null,i.a.createElement("td",null,e.gider.cekiciAdi),i.a.createElement("td",null,e.gider.giderKalemi),i.a.createElement("td",null,e.gider.miktar),i.a.createElement("td",null,e.gider.tarih.substring(0,10)),i.a.createElement("td",null,i.a.createElement(c.b,{to:"/duzenle/"+e.gider._id},"d\xfczenle")," | ",i.a.createElement("a",{href:"#",onClick:function(){e.deleteGider(e.gider._id)}},"sil")))},v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).deleteGider=a.deleteGider.bind(Object(g.a)(a)),a.state={giderler:[]},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("http://localhost:5000/giderler/").then((function(t){e.setState({giderler:t.data})})).catch((function(e){console.log(e)}))}},{key:"deleteGider",value:function(e){E.a.delete("http://localhost:5000/giderler"+e).then((function(e){return console.log(e.data)})),this.setState({giderler:this.state.giderler.filter((function(t){return t._id!==e}))})}},{key:"giderlerListesi",value:function(){var e=this;return this.state.giderler.map((function(t){return i.a.createElement(p,{gider:t,deleteGider:e.deleteGider,key:t._id})}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h3",null,"Giderler"),i.a.createElement("table",{className:"table"},i.a.createElement("thead",{className:"thead-light"},i.a.createElement("tr",null,i.a.createElement("th",null,"\xc7ekici"),i.a.createElement("th",null,"Masraf Tipi"),i.a.createElement("th",null,"Miktar"),i.a.createElement("th",null,"Tarih"),i.a.createElement("th",null,"\u0130\u015flemler"))),i.a.createElement("tbody",null,this.giderlerListesi())))}}]),t}(n.Component),f=a(36),C=a.n(f),y=(a(69),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).onChangeCekiciadi=a.onChangeCekiciadi.bind(Object(g.a)(a)),a.onChangeGiderkalemi=a.onChangeGiderkalemi.bind(Object(g.a)(a)),a.onChangeMiktar=a.onChangeMiktar.bind(Object(g.a)(a)),a.onChangeTarih=a.onChangeTarih.bind(Object(g.a)(a)),a.onSubmit=a.onSubmit.bind(Object(g.a)(a)),a.state={cekiciAdi:"",giderKalemi:"",miktar:0,tarih:new Date,cekiciler:[]},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("http://localhost:5000/giderler/"+this.props.match.params.id).then((function(t){e.setState({cekiciAdi:t.data.cekiciAdi,giderKalemi:t.data.giderKalemi,miktar:t.data.miktar,tarih:new Date(t.data.tarih)})})).catch((function(e){console.log(e)})),E.a.get("http://localhost:5000/cekiciler/").then((function(t){t.data.length>0&&e.setState({cekiciler:t.data.map((function(e){return e.cekiciAdi}))})})).catch((function(e){console.log(e)}))}},{key:"onChangeCekiciadi",value:function(e){this.setState({cekiciAdi:e.target.value})}},{key:"onChangeGiderkalemi",value:function(e){this.setState({giderKalemi:e.target.value})}},{key:"onChangeMiktar",value:function(e){this.setState({miktar:e.target.value})}},{key:"onChangeTarih",value:function(e){this.setState({tarih:e})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={cekiciAdi:this.state.cekiciAdi,giderKalemi:this.state.giderKalemi,miktar:this.state.miktar,tarih:this.state.tarih};console.log(t),E.a.post("http://localhost:5000/giderler/duzenle",this.props.match.params.id,t).then((function(e){return console.log(e.data)})),window.location="/"}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h3",null,"Gider D\xfczenle"),i.a.createElement("form",{onSubmit:this.onSubmit},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"\xc7ekici: "),i.a.createElement("select",{ref:"userInput",required:!0,className:"form-control",value:this.state.cekiciAdi,onChange:this.onChangeCekiciadi},this.state.users.map((function(e){return i.a.createElement("option",{key:e,value:e},e)})))),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"Masraf Tipi: "),i.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.giderKalemi,onChange:this.onChangeGiderkalemi})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"Tutar \u20ba: "),i.a.createElement("input",{type:"text",className:"form-control",value:this.state.miktar,onChange:this.onChangeMiktar})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"Tarih: "),i.a.createElement("div",null,i.a.createElement(C.a,{selected:this.state.tarih,onChange:this.onChangeTarih}))),i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"submit",value:"Gider D\xfczenle",className:"btn btn-primary"}))))}}]),t}(n.Component)),j=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).onChangeCekiciadi=a.onChangeCekiciadi.bind(Object(g.a)(a)),a.onChangeGiderkalemi=a.onChangeGiderkalemi.bind(Object(g.a)(a)),a.onChangeMiktar=a.onChangeMiktar.bind(Object(g.a)(a)),a.onChangeTarih=a.onChangeTarih.bind(Object(g.a)(a)),a.onSubmit=a.onSubmit.bind(Object(g.a)(a)),a.state={cekiciAdi:"",giderKalemi:"",miktar:0,tarih:new Date,cekiciler:[]},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("http://localhost:5000/cekiciler").then((function(t){t.data.length>0&&e.setState({cekiciler:t.data.map((function(e){return e.cekiciAdi})),cekiciAdi:t.data[0].cekiciAdi})}))}},{key:"onChangeCekiciadi",value:function(e){this.setState({cekiciAdi:e.target.value})}},{key:"onChangeGiderkalemi",value:function(e){this.setState({giderKalemi:e.target.value})}},{key:"onChangeMiktar",value:function(e){this.setState({miktar:e.target.value})}},{key:"onChangeTarih",value:function(e){this.setState({tarih:e})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={cekiciAdi:this.state.cekiciAdi,giderKalemi:this.state.giderKalemi,miktar:this.state.miktar,tarih:this.state.tarih};console.log(t),E.a.post("http://localhost:5000/giderler/ekle",t).then((function(e){return console.log(e.data)})),window.location="/"}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h3",null,"Gider Ekle"),i.a.createElement("form",{onSubmit:this.onSubmit},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"\xc7ekici Se\xe7: "),i.a.createElement("select",{ref:"userInput",required:!0,className:"form-control",value:this.state.cekiciAdi,onChange:this.onChangeCekiciadi},this.state.cekiciler.map((function(e){return i.a.createElement("option",{key:e,value:e},e)})))),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"Gider Kalemi: "),i.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.giderKalemi,onChange:this.onChangeGiderkalemi})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"Miktar \u20ba: "),i.a.createElement("input",{type:"text",className:"form-control",value:this.state.miktar,onChange:this.onChangeMiktar})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"\u0130\u015flem Tarihi: "),i.a.createElement("div",null,i.a.createElement(C.a,{selected:this.state.tarih,onChange:this.onChangeTarih}))),i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"submit",value:"Yeni Gider Ekle",className:"btn btn-primary"}))))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).onChangeCekiciadi=a.onChangeCekiciadi.bind(Object(g.a)(a)),a.onSubmit=a.onSubmit.bind(Object(g.a)(a)),a.state={cekiciAdi:""},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"onChangeCekiciadi",value:function(e){this.setState({cekiciAdi:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={cekiciAdi:this.state.cekiciAdi};console.log(t),E.a.post("http://localhost:5000/cekiciler/ekle",t).then((function(e){return console.log(e.data)})),this.setState({cekiciAdi:""})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h3",null,"Yeni Ara\xe7 Ekle"),i.a.createElement("form",{onSubmit:this.onSubmit},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"Plaka: "),i.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.cekiciAdi,onChange:this.onChangeCekiciadi})),i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"submit",value:"\xc7ekici Ekle",className:"btn btn-primary"}))))}}]),t}(n.Component);var N=function(){return i.a.createElement(c.a,null,i.a.createElement("div",{className:"container"},i.a.createElement(k,null),i.a.createElement("br",null),i.a.createElement(o.a,{path:"/",exact:!0,component:v}),i.a.createElement(o.a,{path:"/edit/:id",component:y}),i.a.createElement(o.a,{path:"/create",component:j}),i.a.createElement(o.a,{path:"/cekici",component:O})))};r.a.render(i.a.createElement(N,null),document.getElementById("root"))},77:function(e,t,a){e.exports=a(161)}},[[77,1,2]]]);
//# sourceMappingURL=main.7f64b639.chunk.js.map