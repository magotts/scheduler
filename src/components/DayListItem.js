import React from "react";
import "components/DayListItem.scss";
import classnames from "classnames";

export default function DayListItem(props) {

  const dayClass = classnames("day-list", {
    "day-list__item": props.name,
    "day-list__item--selected": props.selected === true,
    "day-list__item--full": props.spots === 0
  });

  const formatSpots = function () {
    if (props.spots === 0) {
      return "no spots remaining";
    }
    if (props.spots === 1) {
      return `${props.spots} spot remaining`;
    }
    if (props.spots > 1) {
      return `${props.spots} spots remaining`;
    }
  }

  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)} data-testid={"day"}>
      <h2 className={dayClass}>{props.name}</h2>
      <h3 className={dayClass}>{formatSpots()}</h3>
    </li>
  );
}