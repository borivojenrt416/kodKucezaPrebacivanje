import React,{Component} from 'react'
import Gde from '../komponente/gde'
import {
  Link,
} from "react-router-dom";

class Home extends Component{
constructor(props){
    super(props);
    this.state={
        best:JSON.parse(localStorage.getItem("best")),
       
    }
}
  
    render(){
      const fav = {

      }
        const st={
            float:'left',
            width:'70%'
        }
        const karta = {
            height:'26vw'
        }

        const linkk={
          textDecoration:'none',
          border:'1px solid black',
          padding:'0.5vw',
          borderRadius:'25%',
          color:'black'
        }
        const visina = {
          height:'25vw'
        }
        console.log(this.state.best)
        return(
            <div>
            <h1>Home page</h1>
            <Gde />
            <div style={st}>
            {
                this.state.best.map(bes=>(
                    bes.map(be=>be.map(b=>(
                        <div className="kartica" style = {karta}key={b.id}>
                        {/* <button type="button" className="korpa" value={b.title} onClick={this.kupi}>
                          🛒
                        </button> */}
                        {/* <button type="button" id={b.id} value={b.title} className="fav" onClick={this.props.prosao}>
                ♥
              </button> */}
                        <h1 className="ime">{b.title}</h1> <br />
                        <div className="opis">
                        <br/><br/><br/><br/>
                          <div className="slika">
                            <img src={b.img} onMouseOver={this.prikazi} />

                          </div>
                          <hr />
                          <h2 className="cenaTekst">
                            Cena : {b.cena} <span id="cen">RSD</span>
                          </h2>
                        </div><br/>
                       
                        <Link className="obicno" style={linkk} to={"product/"+b.id} >Detalji</Link>
                      </div>
                    ))
                )
                ))
            }
            </div>
            </div>
 
        );
    }
}

export default Home;