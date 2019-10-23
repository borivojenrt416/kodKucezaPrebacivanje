import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './navigacija.css'

class Navigacija extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             broj : localStorage.getItem("brojProizvoda")
        }
    }
    
    // componentWillUpdate(){
    //     // this.setState({
    //     //     broj: localStorage.getItem("brojProizvoda")
    //     // })
    //     // this.render()
    //  
    // }


    render(){
        const styleLinks = {
                textDecoration : 'none',
                fontSize:'1.2vw',
                Color:'black'
                
        }

        const desno={
            textDecoration : 'none',
                fontSize:'1.2vw',
                float:'right'
        }
        return(

        

                <div>
                    <ul className="flex-container">
                        <Link to="/home" style={styleLinks}><li>HOME</li></Link>
                        <Link to="/onama" style={styleLinks}><li>O NAMA</li></Link>
                        <Link to="/proizvodi" style={styleLinks}><li>PROIZVODI</li></Link>
                        <Link to="/login" style={desno}><li>Log in/Register</li></Link>
                        <Link to="/omiljeno" style={desno}><li>♥</li></Link>
                        <Link to="/kupovina" style={desno} ><li>🛒{this.props.br}</li></Link>
                    </ul>
                   
                </div>
        );
    }
}

export default Navigacija;