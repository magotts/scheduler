import React from "react";
import "components/InterviewerList.scss";
import InterviewerListItem from "components/InterviewerListItem";
import PropTypes from 'prop-types';


export default function InterviewerList(props) {
  console.log("InterviewList props", props);
  const parsedInterviewerList = props.interviewers.map(interviewer => <InterviewerListItem avatar={interviewer.avatar} name={interviewer.name}  selected={interviewer.id === props.value} setInterviewer={(event) => props.onChange(interviewer.id)}/>);

  return (
<section className="interviewers">
  <h4 className="interviewers__header text--light">Interviewer</h4>
  <ul className="interviewers__list">{parsedInterviewerList}</ul>
</section>
  )
      
};

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
};
