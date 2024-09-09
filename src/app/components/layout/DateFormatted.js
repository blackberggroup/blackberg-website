import { useEffect, useState } from 'react';

const DateFormatted = ({ dateString }) => {
    const [formattedDate, setFormattedDate] = useState('');

    useEffect(() => {
        if (dateString) {
            const date = new Date(dateString);
            if (!isNaN(date.getTime())) {
                const options = { year: 'numeric', month: 'long', day: 'numeric' };
                setFormattedDate(new Intl.DateTimeFormat('en-US', options).format(date));
            } else {
                console.error("Invalid date string:", dateString);
            }
        }
    }, [dateString]);

    return <span>{formattedDate || 'Invalid date'}</span>;
};

export default DateFormatted;

