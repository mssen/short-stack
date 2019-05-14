import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

const BlackoutDays = () => {
  const today = new Date();
  const endMonth = new Date(today.getFullYear(), today.getMonth() + 2);

  return (
    <DayPicker
      fromMonth={today}
      toMonth={endMonth}
      selectedDays={[
        new Date(),
        new Date(2019, 4, 10),
        {
          after: new Date(2019, 4, 20),
          before: new Date(2019, 4, 25),
        },
      ]}
    />
  );
};

export default BlackoutDays;
