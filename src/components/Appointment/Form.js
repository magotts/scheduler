import React, { useState } from 'react';
import InterviewerList from "../InterviewerList";
import Button from "../Button";

export default function Form(props) {

  const [name, setName] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");


  // Add a reset() function to the Form component that calls setName("") and setInterviewer(null).
  const reset = () => {
    setName("");
    setInterviewer(null);
  }

  const cancel = () => {
    reset();
    props.onCancel();
  }

  const save = () => {
    props.onSave(name, interviewer);
    
  }

  const validate = function () {
    if (name === "") {
      setError("Student name cannot be blank");
      return;
    }
    setError("");
    props.onSave(name, interviewer);
  }
  
  return (
<main className="appointment__card appointment__card--create">
  <section className="appointment__card-left">
    <form autoComplete="off" onSubmit={event => event.preventDefault()}>
      <input
        className="appointment__create-input text--semi-bold"
        name="name"
        type="text"
        value={name}
        onChange={event => setName(event.target.value)}
        placeholder="Enter Student Name"
        data-testid="student-name-input"

        /*
          This must be a controlled component
        */
      />

    </form>

    <section className="appointment__validation">{error}</section>


    <InterviewerList interviewers={props.interviewers} value={interviewer} onChange={setInterviewer} />
  </section>
  <section className="appointment__card-right">
    <section className="appointment__actions">
      <Button danger onClick={cancel} >Cancel</Button>
      <Button confirm onClick={validate}>Save</Button>
    </section>
  </section>
</main>
)

}