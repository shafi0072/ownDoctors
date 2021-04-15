import React from 'react';
import Doctors from './Doctors';
import HealthTips from './HealthTips';
import YourCountryDoctors from './YourCountryDoctors';
import './Topics.css'
const Topics = () => {
    return (
        <div className="row">
            <div className="col-md-2 doctors">
                <Doctors/>
            </div>
            <div className="col-md-8">
                <HealthTips/>
            </div>
            <div className="col-md-2 countryDc">
             <YourCountryDoctors/>
            </div>
        </div>
    );
};

export default Topics;