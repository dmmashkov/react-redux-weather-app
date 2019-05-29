import React from 'react';
import {connect} from 'react-redux';

const SevenDayForecast = (props) => {

    const forecastList = props.data.daily.data.map((obj, index) => {
        if (index > 0 && index < 8) {
            return (
                <li key={index} className="list-group-item">
                    { new Date(obj.time * 1000).toDateString() } : <strong>{ Math.round(obj.temperatureMax) + " °F" }</strong> , { obj.summary }
                </li>
            ) 
        } else {
            return null
        }
    });

    return (
        <div className="card my-3 w-100">
            <div className="card-header"><h4>7 Day Forecast</h4></div>
            <div className="card-body">
                <ul className="list-group">
                { forecastList }
                </ul>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    data: state.data
});

export default connect(mapStateToProps, null)(SevenDayForecast)