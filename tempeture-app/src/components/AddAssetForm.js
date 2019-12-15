import React, { Component } from 'react';
import PropTypes from 'prop-types';


class AddAssetForm extends Component {

    render() {
        // Styling
        const style = {
            formComponentsStyle: {
                fontFamily: 'Arial, Helvetica, sans-serif',
                textAlign: 'left',
                marginTop: '10px',
                marginLeft: '10px',
                padding: '10px',
                width: '80%'
            },
            submitStyle: {
                flex: '1',
                background: 'white',
                color: 'black',
                borderRadius: '4px',
                padding: '3px',
                margin: '3px',
                cursor: 'pointer',
                fontSize: '16px',
                marginLeft: '80%'
            },
            formStyle: {
                display: 'block',
                background: '#669999',
                padding: '10px',
                margin: '10px'
            }
        }

        return (
            <form onSubmit={this.props.onSubmit} style={style.formStyle}>
                <div>
                <input
                        type={"text"}
                        name={"id"}
                        style={style.formComponentsStyle}
                        placeholder={"Saisir l'id"}
                        value={this.props.id}
                        onChange={this.props.onChange} />
                </div>
                <div>
                    <input
                        type={"text"}
                        name={"tempeture"}
                        style={style.formComponentsStyle}
                        placeholder={"Temperature"}
                        value={this.props.tempeture}
                        onChange={this.props.onChange} />
                </div>
                <div>
                    <input
                        type={"text"}
                        name={"localisation"}
                        style={style.formComponentsStyle}
                        placeholder={"Ville"}
                        value={this.props.localisation}
                        onChange={this.props.onChange} />
                </div>
                <div>
                    <input
                        type={"text"}
                        name={"temps"}
                        style={style.formComponentsStyle}
                        placeholder={"Date et Heure"}
                        value={this.props.temps}
                        onChange={this.props.onChange} />
                </div>
                <div>
                    <input
                        type={"text"}
                        name={"description"}
                        style={style.formComponentsStyle}
                        placeholder={"Description"}
                        value={this.props.description}
                        onChange={this.props.onChange} />
                </div>
                <div>
                    <input
                        type="submit"
                        value="Save"
                        className="btn"
                        style={style.submitStyle}
                    />
                </div>
            </form>
        );
    }

}

//PropTypes
AddAssetForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    tempeture: PropTypes.string.isRequired,
    localisation:PropTypes.string.isRequired,
    temps:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired
}

export default AddAssetForm