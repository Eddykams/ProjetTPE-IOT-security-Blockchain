import React, { Component } from 'react'
import PropTypes from 'prop-types';

class AssetsItems extends Component {

    render() {
        let assetStyle = {
            card: {
                display: 'inline-block',
                background: '#669999',
                width: '350px',
                height: '160px',
                textAlign: 'left',
                padding: '20px',
                margin: '20px',
                border: '5px solid #669999',
                color: 'black'
            }
        }
        return (
            <div style = { assetStyle.card }>
                <p>Tempeture: {this.props.asset.tempeture}</p>
                <p> Localisation: {this.props.asset.localisation}</p>
                <p> Description: {this.props.asset.description}</p>
                <p> Date Heure: {this.props.asset.temps}</p>
            </div>

        )
    }

}

//PropTypes
AssetsItems.propTypes = {
    asset: PropTypes.object.isRequired
}

export default AssetsItems