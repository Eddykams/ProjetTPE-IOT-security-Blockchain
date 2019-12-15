import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Connection from '../Connection';
import Homepage from './Homepage';
import axios from 'axios';

/* An example React component */
class Main extends Component {

 constructor() {
    super();
    //Initialize the state in the constructor
    this.state = {
        assets: [],
        tempetures: [],
        allsensorInformation: null
    }
}

    componentDidMount() {
    /* fetch API in action */
    fetch(`/api/tempeture`)
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(tempetures => {
            //Fetched product is stored in the state
            this.setState({tempetures: tempetures });
        });

    //    this.getAssets();
  }

  renderTemperture() {
    return this.state.tempetures.map(tempeture => {
        return (
            //this.handleClick() method is invoked onClick.
            <li onClick={
                ()=>this.handleClick(tempeture)} key={tempeture.id} >
                {tempeture.localisation}
            </li>     
        );
    })
  }
  getAssets () {
    // Search for all assets
    Connection.search('http://localhost:3000/api/queries/selectAllAssets')
      .then(data => {
        //store the assets in the assets array
        
        this.setState({
          assets: data
        })
      })
  }
  handleClick(tempeture) {
    //handleClick is used to set the state
   // this.setState({allsensorInformation:tempeture});
   console.log(tempeture.localisation);
  }

    render() {
        return (
            <Router>
                <Header />
                <Route exact path={"/"} render={props => (
                <React.Fragment>
                    <h1>List of Assets</h1>
                    
                    <Homepage assets={this.state.tempetures} />
                    
                    </React.Fragment>
                )}/>
            </Router>
        );
    }
}
 
export default Main;
 
/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";  
*/
 
if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}