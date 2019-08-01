import React, {useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './spinner';

const App = () => {
    const [lat, setLat] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    //empty arrray as second argument means, run just once
    useEffect(()=>{
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                setLat(position.coords.latitude);
            }, 
            (err) => {
                setErrorMessage(err.message );
            }
        );
    }, []);

    let content;

    if(errorMessage){
        content = <div>Error: {errorMessage}</div>;
    } else if (lat){
        content = <SeasonDisplay lat={lat}/>;
    } else content = <Spinner message= "Please accept location request" />;

    return <div className="border red">{content}</div>
};

ReactDOM.render(<App />, document.querySelector('#root'));