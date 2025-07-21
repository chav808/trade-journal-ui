import { useState } from 'react';

export default function CalendarGrid({ onDayClick }) {
  // Get current date info
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth(); // 0 = January

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Get number of days in month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Get the weekday of the first day (0 = Sunday, 6 = Saturday)
  const startingDayOffset = new Date(year, month, 1).getDay();

  const [selected, setSelected] = useState(null);

  const handleClick = (day) => {
    setSelected(day);
    onDayClick(day);
  };

  // Navigate between months
  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
    setSelected(null);
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
    setSelected(null);
  };

  return (
    <div className="bg-white p-4 rounded shadow text-black">
      <div className="flex justify-between items-center mb-4">
        <button type="button"
  onClick={prevMonth}
  className="!bg-white !text-black px-2 py-1 rounded hover:!bg-gray-200">&lt;</button>
        <h2 className="text-xl font-semibold">{monthNames[month]} {year}</h2>
        <button type="button"
  onClick={prevMonth}
  className="!bg-white !text-black px-2 py-1 rounded hover:!bg-gray-200">&gt;</button>
      </div>

      <div className="grid grid-cols-7 text-center font-bold mb-2">
        {weekDays.map((day) => (
          <div key={day} className="text-gray-700">{day}</div>
        ))}you
      </div>

      <div className="grid grid-cols-7 gap-2">
        {/* Offset for starting weekday */}
        {Array.from({ length: startingDayOffset }).map((_, i) => (
          <div key={`offset-${i}`} />
        ))}

        {/* Day boxes */}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const isSelected = selected === day;
          return (
            <div
              key={day}
              onClick={() => handleClick(day)}
              className={`cursor-pointer border rounded-md p-4 text-center hover:bg-blue-100 transition ${
                isSelected ? 'bg-blue-300 font-bold' : 'bg-gray-50'
              }`}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
}
