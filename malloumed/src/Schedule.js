import React, { useState } from 'react';

const Schedule = () => {
  const [schedule, setSchedule] = useState([
    { time: '10:00 AM', event: 'Review Chapter 1' },
    { time: '12:00 PM', event: 'Flashcard Session' },
    { time: '3:00 PM', event: 'Quiz on Chapter 2' },
  ]);

  return (
    <div>
      <h2>Today's Schedule</h2>
      <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
        {schedule.map((item, index) => (
          <li key={index}>
            <strong>{item.time}</strong>: {item.event}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Schedule;
