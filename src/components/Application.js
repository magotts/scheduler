import React, { useState, useEffect } from "react";
import Appointment from "components/Appointment"; 
import "components/Application.scss";
import DayList from "../components/DayList";
import axios from "axios";
import { getAppointmentsForDay } from "../helpers/selectors";

// const appointments = [
//   {
//     id: 1,
//     time: "12pm",
//   },
//   {
//     id: 2,
//     time: "1pm",
//     interview: {
//       student: "Lydia Miller-Jones",
//       interviewer: {
//         id: 1,
//         name: "Sylvia Palmer",
//         avatar: "https://i.imgur.com/LpaY82x.png",
//       }
//     }
//   },
//   {
//     id: 3,
//     time: "3pm",
//   },
//   {
//     id: 4,
//     time: "4pm",
//     interview: {
//       student: "Yvette",
//       interviewer: {
//         id: 4,
//         name: "Zoey",
//         avatar: "https://i.imgur.com/LpaY82x.png",
//       }
//     }
//   },
//   {
//     id: 5,
//     time: "5pm",
//     interview: {
//       student: "Darth Vader",
//       interviewer: {
//         id: 5,
//         name: "C3PO",
//         avatar: "https://i.imgur.com/LpaY82x.png",
//       }
//     }
//   },
//   {
//     id: 6,
//     time: "6pm",
//     interview: {
//       student: "Luke Skywalker",
//       interviewer: {
//         id: 6,
//         name: "Yoda",
//         avatar: "https://i.imgur.com/LpaY82x.png",
//       }
//     }
//   }
// ];

export default function Application(props) {
  // const [day, setDay] = useState('Monday');
  // const [days, setDays] = useState([]);
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    // you may put the line below, but will have to remove/comment hardcoded appointments variable
    appointments: {}
  });

  const dailyAppointments = getAppointmentsForDay(state, state.day);

//   useEffect(() => {
//     axios.get("api/days").then(response => {
//       // setDays(response.data);
//     })
// }, []);

  useEffect(() => { 
    Promise.all([
      axios.get("api/days"),
      axios.get("api/appointments"),
      axios.get("api/interviewers")
    ]).then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data }));

  })
}, []);
 
  
  const setDay = day => setState({ ...state, day });

  // const setDays = (days) => setState(prev => ({ ...prev, days}));


  const parsedAppointment = dailyAppointments.map(appointment  => 
    <Appointment  key={appointment.id} {...appointment}/>);

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
        {parsedAppointment}
        <Appointment key="last" time="7pm" />
      </section>
    </main>
  );
}