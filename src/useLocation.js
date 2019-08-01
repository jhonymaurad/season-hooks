import {useState, useEffect } from 'react';

export default () => {
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

    return [lat, errorMessage];
}