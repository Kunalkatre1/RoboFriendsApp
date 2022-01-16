import React, {Component} from "react";
import CardList from "../components/cardList";
import SearchBox from "../components/SearchBox";
import './App.css';
import Scroll from '../components/scroll'

class App extends Component {

    constructor(){
        super();    
        this.state = {
            robots: [],
            searchfield : ''
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(users => this.setState({robots : users}))
    }

    onSearchChange = (event) => { 
        this.setState({searchfield: event.target.value})
        
    }

    render(){
        console.log(this.robots);
        const filterRobots = this.state.robots.filter(robot => {return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())})
        
        if (this.state.robots.length === 0){
            return <h1>Loading...</h1>
        }else{

            return (
                <div className="tc">
                    <h1>PokeRoboApp</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filterRobots}/>
                    </Scroll>
                </div>
                
            );
        }

        
    }
}

export default App;