import React from 'react';

const NotFound = () => {
    React.useEffect(() => {
        document.title = "404 - 你走错了呢";
    }, []);

    return <h1>你走错了呢</h1>;
};

export default NotFound;
