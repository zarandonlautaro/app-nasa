const DatePicker = ({ handleDate }) => (
  <div>
    <label htmlFor="start">Select a date</label>
    <input type="date" id="start" onChange={handleDate} />
  </div>
);

export default DatePicker;
