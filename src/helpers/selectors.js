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
