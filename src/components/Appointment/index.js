import React from "react";
import "components/Appointment/styles.scss"; 
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import useVisualMode from "hooks/useVisualMode";


export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";


  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  return (
    
    <article className="appointment">
      <Header time={props.time} />
      {/* {props.interview ? <Show student={props.interview.student}
          interviewer={props.interview.interviewer} /> : <Empty />} */}

{/* Update the onAdd function we pass to our Empty component to transition to the CREATE mode when the user clicks the add appointment button, instead of logging to the console. */}
        {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
        {mode === CREATE && <Form interviewers={props.interviewers} onCancel={back}/>}
        {mode === SHOW && (
          <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
  
          />
)}
    </article>
    
  )

}