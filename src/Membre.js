import React,{Component} from 'react'
import './membre.css'

class Membre extends Component {
    constructor(props){
        super(props)
        this.state={
            gender:props.gender
        }
    }
    
 
  
    
    render(){
        return(
            <div className="card">
            <div  className={this.state.gender }>
             
                <img className="pic" src={this.props.pic}/>
              
                <h2 className="name">{this.props.name} <span className="last">{this.props.last}</span></h2>
                
                <h3 className="post">{this.props.post } </h3>
                <h3 className="post">{this.props.cat } </h3>
                <h4>{this.props.gender} </h4>

            </div>
            </div>
        )
    }
}
export default Membre