import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./proizvodi.css";
import Side from "../komponente/side.js";
import { withRouter } from "react-router-dom";

const Proizvod = ({ match }) => <p>{match.params.id}</p>;
class Proizvodi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products:JSON.parse(localStorage.getItem("pr")),
      kup: JSON.parse(localStorage.getItem("kupi")),
      fav: JSON.parse(localStorage.getItem("fav1"))
    };
  }

  // ubaci=()=>
  // {
  //   // console.log(this.state.products)
  //   var niz = [this.state.products.map(pr=>pr.data.filter(d=>d.best===true))]
  
 

  // componentDidMount(){
  //   this.ubaci()
  // }

  dodajUOmiljeno = e => {
    console.log(this.state.fav);
    var niz = [];

    niz = this.state.fav;

    var objekat = null;
    var br = 0;
    var indeks = 0;
    if(this.state.fav!==null){
    if (this.state.fav.length !== 0) {
      for (let i = 0; i < this.state.fav.length; i++) {
        if (this.state.fav[i].title === e.target.value) {
          br = 1;
        }
      }
    }
  }
  var objekat = null;
  // this.setState({
  //   fav:[]
  // })
  if (br === 0) {
    for (let k = 0; k < this.state.products.length; k++) {
      for (let i = 0; i < this.state.products[k].data.length; i++) {
        if (e.target.value === this.state.products[k].data[i].title) {
          objekat = this.state.products[k].data[i];
          console.log(this.state.products[k].data[i]);
        }
      }
    }
  }

  if(this.state.fav===null)
  {
    var niz2= [objekat]
    this.setState({
      fav: niz2
     });
     localStorage.setItem("fav1", JSON.stringify(niz2));
  }
  else{
    var niz3 = []
    niz3 =this.state.fav
    niz3.push(objekat)
    const k = niz3.filter(n => n !== null);
    localStorage.setItem("fav1", JSON.stringify(k));
    console.log("session storage items", localStorage.getItem("fav1"));
    this.setState({
     fav: k
    });
  }
  console.log(localStorage.getItem("fav1"))
  
 

 
  };

  kupi = e => {
    console.log(this.state.kup);
    var niz = [];

    niz = this.state.kup;

    var objekat = null;
    var br = 0;
    var indeks = 0;
    if(this.state.kup!==null){
    if (this.state.kup.length !== 0) {
      for (let i = 0; i < this.state.kup.length; i++) {
        if (this.state.kup[i].title === e.target.value) {
          br = 1;
        }
      }
    }
   
  }
  var objekat = null;
  // this.setState({
  //   fav:[]
  // })
  var promena = 0
  if (br === 0) {
    for (let k = 0; k < this.state.products.length; k++) {
      for (let i = 0; i < this.state.products[k].data.length; i++) {
        if (e.target.value === this.state.products[k].data[i].title) {
          objekat = this.state.products[k].data[i];
          console.log(this.state.products[k].data[i]);
          promena=1
        }
      }
    }
  }

  if(this.state.kup===null)
  {
    var niz2= [objekat]
    this.setState({
      kup: niz2
     });
     localStorage.setItem("kupi", JSON.stringify(niz2));
     localStorage.setItem("brojProizvoda",JSON.stringify(niz2.length))
  }
  else{
    var niz3 = []
    niz3 =this.state.kup
    niz3.push(objekat)
    const k = niz3.filter(n => n !== null);
    localStorage.setItem("kupi", JSON.stringify(k));
    console.log("session storage items", localStorage.getItem("kupi"));
    this.setState({
     kup: k
    });
    localStorage.setItem("brojProizvoda",JSON.stringify(k.length))
  }
  console.log(localStorage.getItem("kupi"))
  // if(this.state.kup!==null)
  // {
  // localStorage.setItem("brojProizvoda",JSON.stringify(this.state.kup.length))
  // }
  if(promena===1)
  {
    this.props.azuriraj()
  }
 
  };

  idiNaDetalje = e => {
    console.log(e.target.id);
    var objec = null;
    for (let k = 0; k < this.state.products.length; k++) {
      for (let i = 0; i < this.state.products[k].data.length; i++) {
        if (e.target.id === this.state.products[k].data[i].title) {
          objec = this.state.products[k].data[i];
          console.log(this.state.products[k].data[i]);
        }
      }
    }

    var st = JSON.stringify(objec.id)
    let path = "/product/"+objec.id;
    this.props.history.push(path);
  };

  render() {
  
    return (
      <div>
        <h1>Proizvodi</h1>
        <div>
          <Side
            products={this.state.products}
            dod={this.dodajUOmiljeno}
            idi={this.idiNaDetalje}
            kupovina={this.kupi}
            azurira = {this.props.azuriraj}
 
          />
        </div>
      </div>
    );
  }
}

export default withRouter(Proizvodi);
