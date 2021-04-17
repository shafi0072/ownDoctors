import React, { useEffect, useState } from 'react';
import EmargencyDoctors from './EmargencyDoctors';

const YourCountryDoctors = () => {
    const [countryDoc, setCountryDoc] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setCountryDoc(data))
    }, [])
    return (
        <div>
            <h5>Emargency Doctors</h5>
            <div>
                {
                    countryDoc.map(data => <EmargencyDoctors data = {data} />)
                }
            </div>
        </div>
    );
};

export default YourCountryDoctors;