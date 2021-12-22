import DatePicker, { utils } from "react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";

const BirthdayDatePicker = ({ setSelectedDay, selectedDay }) => {
  const minimumDate = {
    year: 1330,
    month: 1,
    day: 1,
  };
  return (
    <DatePicker
      value={selectedDay}
      maximumDate={utils("fa").getToday()}
      onChange={setSelectedDay}
      minimumDate={minimumDate}
      inputPlaceholder="انتخاب کنید"
      locale="fa"
      slideAnimationDuration="0.3s"
    />
  );
};

export default BirthdayDatePicker;
