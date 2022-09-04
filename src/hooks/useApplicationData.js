import { useState, useEffect } from "react";
import axios from "axios";


export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = (day) => setState({ ...state, day });
  const updateSpots = (id, appointments) => {
    const day = state.days.filter(day =>
      day.appointments.includes(id)
    )[0];

    day.spots = day.appointments.reduce((acc, apptID) => {
      if (!appointments[apptID].interview) {
        acc += 1;
      }
      return acc;
    }, 0);

    const days = [...state.days];
    const dayIndex = day.id - 1;
    days[dayIndex] = day;

    return days;
  };

  useEffect(() => {
    const daysURL = `http://localhost:8001/api/days`;
    const appointmentsURL = 'http://localhost:8001/api/appointments';
    const interviewersURL = 'http://localhost:8001/api/interviewers';

    Promise.all([
      axios.get(daysURL),
      axios.get(appointmentsURL),
      axios.get(interviewersURL)
    ]).then((res) => {
      setState(prev => ({
        ...prev,
        days: res[0].data,
        appointments: res[1].data,
        interviewers: res[2].data
      }));
    });
  }, []);


  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    const days = updateSpots(id, appointments);

    return axios
      .put(`/api/appointments/${id}`, { interview })
      .then(() => {
        setState(prev => {
          return { ...prev, appointments, days };
        });
      });
  };

  const cancelInterview = id => {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    const days = updateSpots(id, appointments);

    return axios
      .delete(`/api/appointments/${id}`)
      .then(() => {
        setState(prev => {
          return { ...prev, appointments, days };
        });
      });
  };
  
  return { state, setDay, bookInterview, cancelInterview };
}