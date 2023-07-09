// L'idée est de prendre la date d'aujourd'hui, et de 
// calculer la date mise dans les input, pour 
// savoir cela fait combien de temps

import React, { useState, useEffect } from 'react';

function CurrentDate() {
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const date = new Date();
        setCurrentDate(date.toDateString());
    }, []);

    return (
        <>
            <p>Date actuelle : {currentDate}</p>
        </>
    );
}

export default CurrentDate;