import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header'
import Connection from './Connection';
import Homepage from './components/Homepage';
import './App.css';

class App extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      assets: [],
      tempetures: [],
    }
  }
  UNSAFE_componentWillMount()
  {
    this.getAssetsFromBlockchain();
    this.getAssetsFromPHP();
  }

  /* */
  renderTemperture() {
    return this.state.tempetures.map(tempeture => {
        return (
            <li onClick={
                ()=>this.handleClick(tempeture)} key={tempeture.id} >
                {tempeture.localisation}
            </li>     
        );
    })
  }

  /* data from laravel*/
  getAssetsFromPHP () {
  Connection.searchfromphp()
    .then(data => {
      this.setState({tempetures: data});
      
    })
  }
  /* data from blockchain */
  getAssetsFromBlockchain () {
    // Search for all assets
    Connection.search('queries/selectAllAssets')
      .then(data => {
        //store the assets in the assets array
        
        this.setState({
          assets: data
        })
      })
  }

  addAsset = (id,tempeture,localisation,temps,description) => {
    // Create the data object
    const data = {
       //"$class": "org.tempeture.blockchain.TempetureAsset",
       "id" : id,
       "tempeture": Number(tempeture),
       "localisation": localisation,
       "temps": temps,
       "description" : description
    }

    // Send this data to the Hyperledger Network
    Connection.create('TempetureAsset', data)
      .then((err) => {
        if (err) {
          console.log(err)
        }
        // Get the new asset
        this.getAssetsFromBlockchain()
      })
  }

    handleClick(tempeture) {
      //handleClick is used to set the state
     // this.setState({allsensorInformation:tempeture});
     console.log(tempeture.localisation);
    }

  render(){
    return (
      <Router>
        <Header />
        <Route exact path={"/"} render={props => (
          <React.Fragment>
            <h3>Informations des differents capteurs</h3>                 
            <Homepage assets={this.state.assets} addAsset={this.addAsset} />
          </React.Fragment>
        )}
        />
      </Router>
    );
      // <Homepage assets={this.state.assets} tempetures={this.state.tempetures}/> ok for db
  }
}
export default App;