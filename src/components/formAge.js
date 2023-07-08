import React, { useState } from 'react';

function Form() {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(day, month, year);
    };

    return (
        <form className="formStyle" onSubmit={handleSubmit}>
            <label>
                day
                <input
                    type='number'
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                />
            </label>
            <label>
                month
                <input
                    type='number'
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                />
            </label>
            <label>
                année
                <input
                    type='number'
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                />
            </label>
        </form>
    );
}

export default Form;