import React, { useState } from 'react';
import CurrentDate from './components/currentDate'


function Form() {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    const ageYear = myYear - year;
    const ageMonth = myMonth - month;
    const ageDay = myDay - day;

    return (
        <div className='ageApp'>
            {/* ------- Form ------- */}
            <form className="formStyle" onSubmit={handleSubmit}>
                <label className='numberDay'>
                    day
                    <input
                        type='number'
                        placeholder='28'
                        min={1}
                        max={31}
                        value={day}
                        onChange={(e) => setDay(e.target.value)}
                    />
                </label>
                <label className='numberMonth'>
                    month
                    <input
                        type='number'
                        placeholder='03'
                        min={1}
                        max={12}
                        value={month}
                        onChange={(e) => setMonth(e.target.value)}
                    />
                </label>
                <label className='numberYear'>
                    year
                    <input
                        type='number'
                        placeholder='1978'
                        min={0}
                        max={2023}
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                    />
                </label>
            </form>
            {/* ------- Bar horizontal ------ */}
            <div className='bar-button'>
                <div className='bar'>
                    <span></span>
                </div>
                <div className='btn'>
                    <button></button>
                </div>
            </div>
            {/* ------- Big display ------- */}
            <div className='bigDisplay'>
                <p className='bigYear'><i><span>{ageYear}</span> years</i></p>
                <p className='bigMonth'><i><span>{ageMonth}</span> months</i></p>
                <p className='bigDay'><i><span>{ageDay}</span> days</i></p>
            </div>
        </div>
    );
}

export default Form;