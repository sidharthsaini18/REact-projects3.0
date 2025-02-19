import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SuccessForm = () => {
  const location = useLocation();
  const { inputData } = location.state || {};

  const [appointmentNumber, setAppointmentNumber] = useState("");

  useEffect(() => {
    if (inputData) {
      const generateAppointmentNumber = () => {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const randomLetters = Array.from({ length: 3 }, () =>
          letters.charAt(Math.floor(Math.random() * letters.length))
        ).join("");
        const randomNumbers = Math.floor(1000 + Math.random() * 9000);
        return `APPT-${randomLetters}-${randomNumbers}`;
      };

      const apptNumber = generateAppointmentNumber();
      setAppointmentNumber(apptNumber);
    }
  }, [inputData]);

  return (
    <div className="container text-center">
      <div className="bg-success text-white border rounded">
        <h2>Booking Success!</h2>
        {inputData ? (
          <>
            <p>Date: {inputData.date}</p>
            <p>Name: {inputData.name}</p>
            <p>Mobile: {inputData.mobile}</p>
            <p>Appointment Number: {appointmentNumber}</p>
          </>
        ) : (
          <p>No booking data available.</p>
        )}
      </div>
    </div>
  );
};

export default SuccessForm;
