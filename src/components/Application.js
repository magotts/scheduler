import React, { useState, useEffect } from "react";
import Appointment from "components/Appointment"; 
import "components/Application.scss";
import DayList from "../components/DayList";
import axios from "axios";
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "../helpers/selectors";
import useApplicationData from "../hooks/useApplicationData";

export default function Application(props) {

const {
  state,
  setDay,
  bookInterview,
  cancelInterview
} = useApplicationData();
  
  
const dailyAppointments = getAppointmentsForDay(state, state.day);
const interviewers = getInterviewersForDay(state, state.day);
  

const schedule = dailyAppointments.map((appointment) => {
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