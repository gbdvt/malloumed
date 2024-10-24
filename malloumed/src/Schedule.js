import React, { useState, useEffect } from 'react';
import './Schedule.css';

const Schedule = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update the current time every minute to keep the schedule up-to-date
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Updates every minute

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  const schedule = [
    { day: 'Monday', classes: ['08:00 - 10:00', '10:30 - 12:30', '12:30 - 14:00'] },
    { day: 'Tuesday', classes: ['08:00 - 10:00', '10:30 - 12:30', '12:30 - 14:00', '18:00 - 19:00 (Dance Class)'] },
    { day: 'Wednesday', classes: ['08:00 - 10:00', '10:30 - 12:30'] },
    { day: 'Thursday', classes: ['08:00 - 10:00', '10:30 - 12:30'] },
  ];

  // Map days to their numeric value
  const dayMap = {
    'Monday': 1,
    'Tuesday': 2,
    'Wednesday': 3,
    'Thursday': 4,
  };

  // Function to check if the class has passed
  const isClassPassed = (classTime, dayOfWeek) => {
    const currentDay = currentTime.getDay(); // Sunday = 0, Monday = 1, etc.
    const [start, end] = classTime.split(' - ');

    // If the current day is after the class day, it's passed
    if (currentDay > dayMap[dayOfWeek]) return true;

    // If the current day is before the class day, it's not passed
    if (currentDay < dayMap[dayOfWeek]) return false;

    // If it's the current day, we compare the time
    const classEndTime = new Date(currentTime);
    const [endHour, endMinute] = end.split(':');
    classEndTime.setHours(parseInt(endHour, 10));
    classEndTime.setMinutes(parseInt(endMinute, 10));

    return currentTime > classEndTime;
  };

  return (
    <div className="schedule-container">
      {schedule.map((daySchedule, index) => (
        <div key={index} className="schedule-day">
          <h3>{daySchedule.day}</h3>
          <ul>
            {daySchedule.classes.map((classTime, idx) => (
              <li
                key={idx}
                className={`class-time ${isClassPassed(classTime, daySchedule.day) ? 'passed' : ''}`}
              >
                {classTime}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Schedule;
