export function getAppointmentsForDay(state, day) {
  const result = [];
  for (const element of state.days) {
    if (element.name === day) {
      for (const appointment of element.appointments) {
          result.push(state.appointments[appointment]);
      }
    }
  }
  return result;
};

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  } else {
    return { ...interview, interviewer: state.interviewers[interview.interviewer] };
  }
}

export function getInterviewersForDay(state, day) {
  const result = [];
  for (const element of state.days) {
    if (element.name === day) {
      for (const appointment of element.appointments) {
          result.push(state.appointments[appointment]);
      }
    }
  }
  return result;
};