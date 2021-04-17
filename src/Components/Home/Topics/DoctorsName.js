import React from 'react';

const DoctorsName = (query) => {
    const {name, id, username} = query
    return (
        <div>
           <h5>{name}</h5>
        </div>
    );
};

export default DoctorsName;