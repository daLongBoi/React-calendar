import React, { useState, useEffect } from "react";
import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  startOfWeek,
  endOfWeek,
  format,
  addMonths,
  subMonths,
  isSameMonth,
  isSameDay,
  startOfDay,
  getDate,
} from "date-fns";
import { chunk } from "lodash";

const MonthlyCalendar = ({ events, handleEventClick }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const renderEvents = (day) => {
    const filteredEvents = events.filter((event) => {
      const eventDate = new Date(event.startTime);
      const targetDate = startOfDay(new Date(day));
      return event.startTime && isSameDay(eventDate, targetDate);
    });

    return filteredEvents.map((event, index) => (
      <div
        key={event.id}
        onClick={() => handleEventClick(event, index)}
        className={`border border-gray-200 p-1 mb-1 cursor-pointer`}
      >
        {event.name}
      </div>
    ));
  };

  const renderMonth = () => {
    const monthDays = eachDayOfInterval({
      start: startOfMonth(currentMonth),
      end: endOfMonth(currentMonth),
    });

    const weeks = chunk(monthDays, 7);

    return (
      <table className="table-fixed w-full">
        <thead>
          <tr>
            {monthDays.map((day, index) => (
              <th key={index} className="w-1/7 py-2">
                {day.getDate()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, index) => (
            <tr key={index}>
              {week.map((day) => (
                <td
                  key={day}
                  className={`border border-gray-200 p-2 h-32 ${
                    !isSameMonth(day, currentMonth) ? "bg-gray-100" : ""
                  }`}
                >
                  <div className="font-bold mb-2">{getDate(day)}</div>
                  {renderEvents(day)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="container mx-auto p-4">
      <button
        onClick={() => setCurrentMonth((prevMonth) => subMonths(prevMonth, 1))}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
      >
        Previous Month
      </button>
      <button
        onClick={() => setCurrentMonth((prevMonth) => addMonths(prevMonth, 1))}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
      >
        Next Month
      </button>

      <h2 className="text-xl font-bold mb-4">
        {format(currentMonth, "MMMM yyyy")}
      </h2>

      {renderMonth()}
    </div>
  );
};

export default MonthlyCalendar;
