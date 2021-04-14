import React from 'react';
import Doctors from './Doctors';
import HealthTips from './HealthTips';
import YourCountryDoctors from './YourCountryDoctors';

const Topics = () => {
    return (
        <div className="rpw">
            <div className="col-md-2">
                <Doctors/>
            </div>
            <div className="col-md-8">
                <HealthTips/>
            </div>
            <div className="col-md-2">
             <YourCountryDoctors/>
            </div>
        </div>
    );
};

export default Topics;