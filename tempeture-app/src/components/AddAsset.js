import React, { Component } from 'react';
import AddAssetForm from './AddAssetForm'
import PropTypes from 'prop-types';

class AddAsset extends Component {

  // The state stores the form variables
  state = {
    id: '',
    tempeture: '',
    localisation: '',
    temps: '',
    description: ''
  }

  // Handles the submit. Passes the form varaibles to the function addAsset in App.js
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addAsset(this.state.id, this.state.tempeture, this.state.localisation,this.state.temps,this.state.description);
    this.setState({id: '', tempeture: '', localisation: '', temps:'', description:''});
  }

  // Handles when information is changed in the form storing it in the state
  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <div>
      <h3>Add Sensor information to Blockchain</h3>
        <AddAssetForm onSubmit={this.onSubmit} onChange={this.onChange} id={this.state.id} tempeture={this.state.tempeture} localisation={this.state.localisation} temps={this.state.temps} description={this.state.description}/>
      </div>
    );
  }

}

//PropTypes
AddAsset.propTypes = {
  addAsset: PropTypes.func.isRequired
}

export default AddAsset