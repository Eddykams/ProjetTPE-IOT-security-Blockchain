import React, { Component } from 'react'
import PropTypes from 'prop-types';
import AssetsItems from './AssetsItems'

class Assets extends Component {

    render() {
        return (
            <div>
                {this.props.assets.map((asset) => (
                    <AssetsItems key={asset.id} asset={asset}/>
                ))}
            </div>
        )}
}

//PropTypes
Assets.propTypes = {
    assets: PropTypes.array.isRequired
}

export default Assets