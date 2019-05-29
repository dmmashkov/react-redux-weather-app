import axios from 'axios';
import * as apiKeys from '../config/apiKeys';

export const fetchWeather = (location) => {
    return async (dispatch) => {
        dispatch(fetchStart());

        let currentLocation = undefined;

        return axios.get(getGoogleMapsApiUrl(location))
            .then((response) => {
                
                if (response.data.status !== 'OK') {
                    return Promise.reject();
                }

                currentLocation = response.data.results[0].formatted_address;

                const lat = response.data.results[0].geometry.location.lat;
                const lng = response.data.results[0].geometry.location.lng;

                return axios.get(getDarkskyApiUrl(lat, lng))
            }).then((response) => {
                dispatch(fetchSuccess(response.data, currentLocation));
            }).catch((err) => {
                dispatch(fetchError());
            })
    }
};

const fetchStart = () => ({
    type: 'FETCH_START'
});

const fetchSuccess = (data, location) => ({
    type: 'FETCH_SUCCESS',
    payload: data,
    location: location
});

const fetchError = () => ({
    type: 'FETCH_ERROR'
});

const getGoogleMapsApiUrl = (location) => (
    `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${apiKeys.GOOGLE_MAPS_API_KEY}`
);

const getDarkskyApiUrl = (lat, lng) => (
    `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${apiKeys.DARKSKY_API_KEY}/${lat},${lng}`
);