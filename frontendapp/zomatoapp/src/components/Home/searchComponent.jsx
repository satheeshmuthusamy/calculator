import React,{Component} from 'react';
import './search.css';

const url="https://foodwebpag.herokuapp.com/location";
const restUrl="https://foodwebpag.herokuapp.com/restaurants";
class Search extends Component{
    constructor(props){
        super(props)
        this.state={
            location:'',
            restaurants:''
        }
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.state_id} key={item.state_id}>{item.state}</option>
                )
            })
        }
    }

    renderRest = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.restaurant_id} key={item.restaurant_id}>{item.restaurant_name} | {item.address}</option>
                )
            })
        }
    }
    
    handleCity = (event) => {
        let stateId = event.target.value;
        console.log(stateId)
        fetch(`${restUrl}?stateId=${stateId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({restaurants:data})
        })
    }

    render(){
        return(
            <div id="search">
            <div id="logo">
                <span>Z!</span>
            </div>
            <div id="heading">
                Find the best restaurents near you
            </div>
            <div className="dropdown">

               <select onChange={this.handleCity}>
                   <option>-----SELECT YOUR CITY-----</option>
                   {this.renderCity(this.state.location)}
                  
               </select> 
               <select className="restSelect">
                <option >-----SELECT YOUR RESTAURENT-----</option>
                {this.renderRest(this.state.restaurants)}
               
            </select> 
            </div>
        </div>
            )
            }
            //api calling on page load
               // api calling on page load
    componentDidMount() {
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({location:data})
        })
    }
}
    
    
export default Search;