export function getAppointmentsForDay(state, day) {
  const result = [];
  
  const foundDay = state.days.find((eachDay) => eachDay.name === day);
  
  if (!foundDay) {
    return result;
  }

  const appointmentsArr = foundDay.appointments.map(
    (id) => state.appointments[id]
  );

  return appointmentsArr;
};

export function getInterview(state, interview) {
  if(!interview) {
    return null;
  }
  
  const interviewerId = interview.interviewer;
  return { ...interview, interviewer: state.interviewers[interviewerId] };
}

export function getInterviewersForDay(state, day) {
  const foundDay = state.days.filter(filteredDay => filteredDay.name === day)[0];
  if (!foundDay) {
    return [];
  }
  const results = [];
  for (const key of foundDay.interviewers) {
    if (state.interviewers[key]) {
      results.push(state.interviewers[key]);
    }
  }
  return results;
}