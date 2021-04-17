import React, { useEffect, useState } from 'react';
import DoctorsName from './DoctorsName';

const Doctors = () => {
    const [doctorsName, setDoctorsNames] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setDoctorsNames(data))

       
    }, [])
    console.log(doctorsName);
    return (
        <div>
            <h5>Doctors</h5>
            <p>{doctorsName.length}</p>
            <div>
               {
                   doctorsName.map(data => <DoctorsName data={data} />)
               }
            </div>
        </div>
    );
};

export default Doctors;