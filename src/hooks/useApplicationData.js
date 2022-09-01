import { useState } from 'react'
import axios from 'axios'

export default function useApplicationData() {
  const [state, setState] = useState({
    day: 'Monday',
    days: [],
    appointments: {},
    interviewers: {},
  })

  function bookInterview(id, interview) {
    console.log(id, interview);
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    
    setState({...state, appointments});

    return axios
    .put(`/api/appointments/${id}`, appointment)
    .then((res) => {
      if (res.status === 204) {
        setState((prev) => ({ ...prev, appointments }));
      }
    })
    .catch(err => console.log(err))
  }

  function cancelInterview(id){
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios
      .delete(`/api/appointments/${id}`, appointment)
      .then((res) => {
        if (res.status === 204) {
          setState((prev) => ({ ...prev, appointments }));
        }
      })
      .catch(err => console.log(err))
  };

  const setDay = day => setState({ ...state, day });

  return {
    state,
    setState,
    bookInterview,
    cancelInterview,
    setDay,
  }
};