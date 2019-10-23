import React, { Component } from "react";
import "./kartica.css";
import Fav from '../fav/fav'
import {
  Link,
} from "react-router-dom";
class Kartica extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }



  render() {
    
    const visina = {
      height:'26vw'
    }
    const vidljivo={
      textDecoration:'none',
      border:'1px solid black',
      padding:'0.5vw',
      borderRadius:'5%',
      color:'black'
    }
    return (
  
      <div>
        {this.props.p.map(p1 =>
          p1.data.map(d => (
            
            <div className="kartica" style={visina} key={d.id}>
              <button type="button" id={d.id} className="korpa" value={d.title} onClick={this.props.kupov}>
                🛒
              </button>
              <button type="button" id={d.id} value={d.title} className="fav" onClick={this.props.dodaj}>
                ♥
              </button>
              <h1 className="ime">{d.title}</h1> <br />
              <div className="opis">
                <h5 className="cont">{d.content}</h5>
                <div className="slika">
                  <img src={d.img} onMouseOver={this.prikazi} />
                 
                  <Link style={vidljivo}  to={"product/"+d.id} >Detalji</Link>
                </div><br/>
                <hr />
                <h2 className="cenaTekst">
                  Cena : {d.cena} <span id="cen">RSD</span>
                </h2>
              </div>
            </div>
          ))
        )}







      </div>
    );
  }
}

export default Kartica;
