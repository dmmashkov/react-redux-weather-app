import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/weater'

class SearchForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: "",
        }
    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.fetchWeather(this.state.input);
    };

    render() {
        return (
            <div className="input-container">
                <form className="my-3 w-100" onSubmit={this.handleSubmit}>
                    <div className="input-group">
                        <input
                            className="form-control border-primary"
                            onChange={this.handleChange}
                            value={this.state.input}
                            placeholder="Enter a location"
                            required />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="submit">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({
    fetchWeather: (location) => dispatch(actions.fetchWeather(location))
});

export default connect(null, mapDispatchToProps)(SearchForm)
