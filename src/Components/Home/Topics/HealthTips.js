import { BeachAccess } from '@material-ui/icons';
import React from 'react';
import FakeData from '../../FakeRestApi/FakeData'
import HealthTIpsPost from './HealthTIpsPost';
const HealthTips = () => {
    return (
        <div>
            <h5>Daily HealthTips</h5>
            {
                FakeData.map(data => <HealthTIpsPost data={data} />) 
            }
        </div>
    );
};

export default HealthTips;