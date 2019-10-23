import React,{Component} from 'react'
import Gde from './gde'
import { withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom'

class Product extends Component{
    constructor(props){
        super(props);
    
        this.state={
                obj:1,
                products:JSON.parse(localStorage.getItem("pr"))
        }
    }

    componentDidMount(){
        console.log('props',this.props)
        console.log(this.props.match.params.id)
        var trazeniID = this.props.match.params.id
        var objekat=null;
        console.log(this.state.products)
        console.log(trazeniID)
        for(let i=0;i<this.state.products.length;i++)
        {
           console.log(this.state.products[i])
           for(let j=0;j<this.state.products[i].data.length;j++)
           {
            //    console.log(this.state.products[i].data[j])
                if(this.state.products[i].data[j].id===trazeniID)
                objekat = this.state.products[i].data[j]
           }
        }

        console.log(objekat)
      this.setState({
          obj:objekat
      })
    }
    

render(){
    
    const bgc = {
        backgroundColor:"white",
        color:"black",
        padding:"0.8vw",
        margin:"0",
        clear:"both"
    }

    const vrati = {
        textDecoration:'none',
      border:'1px solid black',
      padding:'0.5vw',
     fontSize:'1.2vw',
      color:'black'
    }
    console.log(this.state.obj);
    if(this.state.obj!==null)
    {
    return(
<div style={bgc}>

    <h1>
        {this.state.obj.title}
    </h1>
    <div className="img">
        <img src={this.state.obj.img} />
    </div>
        <h5>{this.state.obj.content}</h5>
        <h3>{this.state.obj.cena}<span>RSD</span></h3>
        <Link style={vrati}  to="/" >VRATI SE NA GLAVNU STRANU</Link>
</div>
    );
    }
    else
    {
        return(
            <div style={bgc}>

    <h1>
     TRENUTNO NEMAMO U BAZI PROIZVOD SA ZADATIM ID-EM</h1>
     <Link style={vrati}  to="/" >VRATI SE NA GLAVNU STRANU</Link>
</div>
        );
    }
}

}
export default withRouter(Product);