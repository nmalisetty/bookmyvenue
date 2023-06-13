import React from "react";
import { GoogleMap, LoadScript } from '@react-google-maps/api';

export default () => {
    const defaultCenter = {
        lat: 39.167687,
        lng: -86.523688
    };
    const mapStyles = {
        height: '50vh',
        width: '100%'
    };
    return(
        <LoadScript
            googleMapsApiKey='API_KEY_HERE'>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={17}
                center={defaultCenter}
            />
        </LoadScript>
    );
}