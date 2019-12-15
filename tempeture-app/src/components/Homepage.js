import React, { Component } from 'react'
import Assets from './Assets'
import PropTypes from 'prop-types';
import AddAsset from './AddAsset';

class Homepage extends Component {

  constructor() {
    super();
    //Initialize the state in the constructor
    this.state = {
        assets: [],
        tempetures: [],
    }
}

  render() {
    let style = {
        AssetsStyle: {
            position: 'relative',
            top: '10px',
            width: '58%',
            borderRight: '1px solid black',
      },
      AddAssetStyle: {
        position: 'absolute',
        top: '290px',
        width: '30%',
        height: '34%',
        borderBottom: '1px solid black',
        left: '59%'
      }
    }
    /* 
     <div style = { style.AssetsStyle }>
        <Assets assets = { this.props.tempetures } />
        </div>
      */
    return (
      <div>
       
        <div style = { style.AssetsStyle }>
        <Assets assets = {this.props.assets} />
        </div>  
        <div style={style.AddAssetStyle}>
          <AddAsset addAsset={this.props.addAsset} />
        </div>  
      </div>);
  }
}

//PropTypes
Homepage.propTypes = {
  assets: PropTypes.array.isRequired,
  tempetures: PropTypes.array.isRequired,
  addAsset: PropTypes.func.isRequired
}

export default Homepage
// <div style = { style.AssetsStyle }>
//<Assets assets = { this.props.tempetures } />
//</div>