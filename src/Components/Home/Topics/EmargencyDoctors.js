import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const EmargencyDoctors = (props) => {
    const {name, id, username} = props.data
    return (
        <div>
        <AccountCircleIcon/>
        <p>{name}</p>
        </div>
    );
};

export default EmargencyDoctors;