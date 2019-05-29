import React from 'react';
import {connect} from 'react-redux';

const CurrentForecast = (props) => {

    return (
        <div className="card my-3 w-100">
            <div className="card-header">
                <h4>Current Forecast</h4>
            </div>
            <div className="card-body">
                <ul className="list-group">
                    <li className="list-group-item">{ new Date(props.data.currently.time * 1000).toDateString() }</li>
                    <li className="list-group-item"><strong>{ Math.round(props.data.currently.apparentTemperature) + " °F" }</strong></li>
                    <li className="list-group-item">{ props.data.currently.summary }</li>
                    <li className="list-group-item">{ props.data.hourly.summary }</li>
                </ul>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    data: state.data, 
});

export default connect(mapStateToProps, null)(CurrentForecast)