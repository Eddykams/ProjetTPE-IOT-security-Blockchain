import React, { Component } from 'react'
import Assets from './Assets'
import PropTypes from 'prop-types';

class Homepage extends Component {

  render() {
    let style = {
      UserAssetsStyle: {
        position: 'relative',
        top: '10px',
        width: '58%',
        borderRight: '1px solid black',
      }
    }

    return (
      <div>
        <div style = { style.UserAssetsStyle }>
        <Assets assets = { this.props.assets } />
        </div>
      </div>);

  }
}

//PropTypes
Homepage.propTypes = {
  assets: PropTypes.array.isRequired
}

export default Homepage