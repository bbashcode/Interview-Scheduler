import DayListItem from "./DayListItem";
import React from 'react';

export default function DayList(props){
  const { days, value, onChange } = props;

  const dayArray = days.map((day) => {
    return <DayListItem 
    key={day.id}
    name={day.name}
    spots={day.spots}
    selected={day.name === value}
    setDay={onChange}
    />
  })

  return(
    <ul>
      {dayArray}
    </ul>
  )
};