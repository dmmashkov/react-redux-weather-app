const initialState = {
    isFetching: false,
    isLoaded: false,
    isError: false,
    data: undefined,
    location: undefined
};

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_START':
            return {
                ...state,
                isFetching: true,
                isLoaded: false,
                data: undefined,
                location: undefined
            };
        case 'FETCH_SUCCESS':
            return {
                ...state,
                isFetching: false,
                isLoaded: true,
                data: action.payload,
                location: action.location,
                isError: false
            };
        case "FETCH_ERROR":
            return {
                ...state,
                isFetching: false,
                isError: true
            };
        default:
            return state;
    }
  };

  