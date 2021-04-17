import React from 'react';

const DoctorsName = (props) => {
    const {name, id, username} = props.data
   
    return (
        <div>
           <p>{name}</p>
        </div>
    );
};

export default DoctorsName;