import React, { useState, useEffect } from "react";
import Appointment from "components/Appointment"; 
import "components/Application.scss";
import DayList from "../components/DayList";
import axios from "axios";
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "../helpers/selectors";
import useApplicationData from "../hooks/useApplicationData";

export default function Application(props) {

  // const [state, setState] = useState({
  //   day: "Monday",
  //   days: [],
  //   // you may put the line below, but will have to remove/comment hardcoded appointments variable
  //   appointments: {}
  // });

//   useEffect(() => { 
//     Promise.all([
//       axios.get("api/days"),
//       axios.get("api/appointments"),
//       axios.get("api/interviewers")
//     ]).then((all) => {
//       console.log(all)
//       setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));

//   })
// }, []);
const {
  state,
  setDay,
  bookInterview,
  cancelInterview
} = useApplicationData();
  
  // const setDay = day => setState({ ...state, day });
  const dailyAppointments = getAppointmentsForDay(state, state.day);
  const interviewers = getInterviewersForDay(state, state.day);
  // const parsedAppointment = dailyAppointments.map(appointment  => {
  //   const interview = getInterview(state, appointment.interview);
  //   <Appointment key={appointment.id} id={appointment.id} time={appointment.time} interview={appointment.interview}/>;
  // });

  // function bookInterview(id, interview) {
  //   console.log("bookInterview:", id, interview);
  //   const appointment = {
  //     ...state.appointments[id],
  //     interview: { ...interview }
  //   };

  //   const appointments = {
  //     ...state.appointments,
  //     [id]: appointment
  //   };
    
  //   const newState = {
  //     ...state,
  //     appointments
  //   }
  //   setState(newState);

  //   return axios
  //   .put(`/api/appointments/${id}`, { interview })
  //   .then((res) => {
	// 		setState(newState);
  //   });
  // }

  // function cancelInterview(id) {
  //   console.log("cancel interview id is", id);
  //   const appointment = {
  //     ...state.appointments[id],
  //     interview: null
  //   };

  //   const appointments = {
  //     ...state.appointments,
  //     [id]: appointment
  //   };
  
  //   return axios
  //   .delete(`/api/appointments/${id}`)
  //   .then(res => {
  //     console.log("res is:", res);
  //   });
  // }

  

const schedule = dailyAppointments.map((appointment) => {
  // const interview = getInterview(state, appointment.interview);

  return (
    <Appointment
      key={appointment.id}
      id={appointment.id}
      time={appointment.time}
      interview={getInterview(state, appointment.interview)}
      interviewers={interviewers}
      bookInterview={bookInterview}
      cancelInterview={cancelInterview}
    />
  );
});

  return (
    <main className="layout">
      <section className="sidebar">
        {/* Replace this with the sidebar elements during the "Project Setup & Familiarity" activity. */}
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
    <hr className="sidebar__separator sidebar--centered" />
    <nav className="sidebar__menu">
        <DayList
          day={state.day}
          days={state.days}
          setDay={setDay}
         />
    </nav>
    <img
       className="sidebar__lhl sidebar--centered"
       src="images/lhl.png"
       alt="Lighthouse Labs"
    />
      </section>
      <section className="schedule">
        {/* Replace this with the schedule elements durint the "The Scheduler" activity. */}
        {schedule}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}