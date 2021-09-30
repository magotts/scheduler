import React from "react";
import "components/InterviewerListItem.scss";
import classnames from "classnames";


export default function InterviewerListItem(props) {

  const interviewerClass = classnames("interviewers__item", {
    "interviewers__item-image": props.avatar,
    "interviewers__item--selected": props.selected === true,
  });
  return (

  <li className={interviewerClass}>
  <img
    className="interviewers__item-image" onClick={props.setInterviewer}
    src={props.avatar}
    alt={props.name}
  />
{props.selected && props.name}</li>
  );
  
};