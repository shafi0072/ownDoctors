import React from 'react';

const HealthTIpsPost = (props) => {
    const {id, title, body} = props.data
    return (
        <div>
            <h5>{title}</h5>
            <p>{body}</p>
        </div>
    );
};

export default HealthTIpsPost;