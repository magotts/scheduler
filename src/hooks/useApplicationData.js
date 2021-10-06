import { useState, useEffect } from "react";
import axios from "axios";


export default function useApplicationData(initial) {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
  });

  const setDay = day => setState({ ...state, day });

  function updateSpots(id, appointments) {
    const newDay = [...state.days];
    let spotsRemaining = 0;

    for (const day of newDay) {
       if(day.name === state.day) {
        for (const appointmentsId of day.appointments) {
          if (appointments[appointmentsId].interview === null) {
           spotsRemaining++;
          }
        }  
          day.spots = spotsRemaining;
      }
  }
  return newDay;
}
 

  function bookInterview(id, interview) {
    console.log("bookInterview:", id, interview);
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    
    const newState = {
      ...state,
      appointments
    }

    return axios
    .put(`/api/appointments/${id}`, { interview })
    .then((res) => {
      const days = updateSpots(id, appointments)
			setState(newState, days);
    });
  }

  function cancelInterview(id) {
    console.log("cancel interview id is", id);
    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    const newState = {
      ...state,
      appointments
    }
    return axios
    .delete(`/api/appointments/${id}`)
    .then(res => {
      const days = updateSpots(id, appointments)
			setState(newState, days);
    });
  }


  useEffect(() => { 
    Promise.all([
      axios.get("api/days"),
      axios.get("api/appointments"),
      axios.get("api/interviewers")
    ]).then((all) => {
      console.log(all)
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));

  })
}, []);


return { state, setDay, bookInterview, cancelInterview, };

}