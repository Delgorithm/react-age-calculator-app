// 1. Récupérer la date d'aujourd'hui
// 2. Calculer la date
    // a. Soustraire la date d'aujourd'hui avec la date dans l'input
        // Day - day input
        // month - month input
        // year - year input

function CurrentDate({ setMyYear, setMyMonth, setMyDay }) {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    setMyYear(year);
    setMyMonth(month);
    setMyDay(day);

    return null;
}

export default CurrentDate;