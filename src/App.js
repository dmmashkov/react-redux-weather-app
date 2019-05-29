import React, {Component} from 'react';
import {connect} from 'react-redux';
import SevenDayForecast from './components/sevenDayForecast'
import CurrentForecast from './components/currentForecast'
import SearchForm from './components/searchForm'

class App extends Component {
    render() {
        return (
            <div className="container">
                <SearchForm/>

                {this.props.isFetching &&
                    (<div className="alert alert-primary" role="alert">
                    Fetching Weather...
                    </div>)
                }

                {this.props.location &&
                    (<div className="alert alert-success" role="alert">
                        Location: {this.props.location}
                    </div>)
                }

                {this.props.isError &&
                    (<div className="alert alert-danger" role="alert">
                    Unable to find location. Try Again.
                    </div>)
                }

                {this.props.isLoaded && (
                    <div>
                        <CurrentForecast/>
                        <SevenDayForecast/>
                    </div>)
                }
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    isError: state.isError, 
    isFetching: state.isFetching, 
    isLoaded: state.isLoaded,
    location: state.location
});

export default connect(mapStateToProps)(App)