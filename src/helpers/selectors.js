export function getAppointmentsForDay(state, day) {
  //... returns an array of appointments for that day
  const result = [];
  const filteredDay = state.days.filter(filDay => filDay.name === day)

  if (!filteredDay[0]) {
    return result;
  }

  for (const apptId of filteredDay[0].appointments) {
    result.push(state.appointments[apptId]);
  }

  return result;
}

export function getInterview(state, interview) { // interview is state.appointments.interview
  if (!interview) {
    return null;
  }
  
  // get the id of state.interviewers ... ie state.interviewers[2]
  const interviewer = state.interviewers[interview.interviewer]; 
  return { ...interview, interviewer }; // outputs Student: name, Interviewer id:2 {info}.
};

export function getInterviewersForDay(state, day) {
  //... returns an array of appointments for that day
  const result = [];
  const filteredDay = state.days.filter(filDay => filDay.name === day)

  if (!filteredDay[0]) {
    return result;
  }

  for (const apptId of filteredDay[0].appointments) {
    result.push(state.appointments[apptId]);
  }

  return result;
}