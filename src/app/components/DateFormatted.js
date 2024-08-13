const DateFormatted = ({ dateString }) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

    return <span>{formattedDate}</span>;
};

export default DateFormatted;
  