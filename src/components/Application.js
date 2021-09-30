import React, { useState } from "react";
import Appointment from "components/Appointment"; 
import "components/Application.scss";
import DayList from "../components/DayList";

const appointments = [
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 3,
    time: "3pm",
  },
  {
    id: 4,
    time: "4pm",
    interview: {
      student: "Yvette",
      interviewer: {
        id: 4,
        name: "Zoey",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 5,
    time: "5pm",
    interview: {
      student: "Darth Vader",
      interviewer: {
        id: 5,
        name: "C3PO",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 6,
    time: "6pm",
    interview: {
      student: "Luke Skywalker",
      interviewer: {
        id: 6,
        name: "Yoda",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  }
];

const days = [
  {
    id: 1,
    name: "Monday",
    spots: 2,
  },
  {
    id: 2,
    name: "Tuesday",
    spots: 5,
  },
  {
    id: 3,
    name: "Wednesday",
    spots: 0,
  },
];


export default function Application(props) {
  const [day, setDay] = useState('Monday');

  const parsedAppointment = appointments.map(appointment  => 
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
   day={day} 
   setDay={setDay}
   days={days}
/></nav>
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