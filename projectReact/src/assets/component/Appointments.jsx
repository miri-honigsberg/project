import React from 'react';

const Appointments = () => {
  const currentDate = new Date(); // Get current date
  const nextWeekDate = new Date();
  nextWeekDate.setDate(nextWeekDate.getDate() + 7); // Get next week date

  const appointments = [
    { date: new Date(2024, 1, 6), title: 'Appointment 1' },
    { date: new Date(2024, 1, 7), title: 'Appointment 2' },
    { date: new Date(2024, 1, 13), title: 'Appointment 3' },
  ];

  return (
    <div>
      {appointments.map(appointment => {
        const appointmentDate = appointment.date;

        // Set CSS class based on the appointment date
        const className = appointmentDate.getTime() === currentDate.getTime()
          ? 'red' // Color red if appointment is scheduled for today
          : appointmentDate > currentDate && appointmentDate <= nextWeekDate
          ? 'green' // Color green if appointment is scheduled for next week
          : '';

        return (
          <div key={appointment.title} className={className}>
            {appointment.title}
          </div>
        );
      })}
    </div>
  );
}

export default Appointments;
