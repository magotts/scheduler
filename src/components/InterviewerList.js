import React from "react";
import "components/InterviewerList.scss";
import InterviewerListItem from "components/InterviewerListItem";

export default function InterviewerList(props) {
  console.log("InterviewList props", props);
  const parsedInterviewerList = props.interviewers.map(interviewer => <InterviewerListItem avatar={interviewer.avatar} name={interviewer.name}  selected={interviewer.id === props.value} setInterviewer={(event) => props.onChange(interviewer.id)}/>);

  return (
<section className="interviewers">
  <h4 className="interviewers__header text--light">Interviewer</h4>
  <ul className="interviewers__list">{parsedInterviewerList}</ul>
</section>
  )

  // return props.interviewers.map(interview => (
  //   <section className="interviewers">
  //     <h4 className="interviewers__header text--light">Interviewer</h4>
  // <ul>
  //   <InterviewerListItem 
  //       id={interview.id}
  //       //name={interview.name} 
  //       avatar={interview.avatar}
  //       selected={interview.name === props.name}
  //       setInterviewer={props.name}  
  //     />
  //    </ul>
  //    </section>)
  //     )
      
};

// props.interviewers.map(interview =>

// Our InterviewerList takes in three props:

// interviewers:array - an array of objects containing the information of each interviewer
// interviewer:number - the id of an interviewer
// setInterviewer:function - a function that accepts an interviewer id
