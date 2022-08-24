import React from 'react';
import "components/InterviewerList.scss";
import InterviewerListItem from './InterviewerListItem';

export default function InterviewerList (props){
  const interviewerArray = props.interviewers.map((interviewer) => {
    return <InterviewerListItem 
    key={interviewer.id}
    name={interviewer.name}
    avatar={interviewer.avatar}
    setInteviwer={interviewer.setInteviwer}
    />
  })

  return(
    <section className="interviewers">
    <h4 className="interviewers__header text--light">{interviewerArray}</h4>
    <ul className="interviewers__list"></ul>
    </section>
  )
  // return (
  //   <section className="interviewers">
  //   <h4 className="interviewers__header text--light">Interviewer</h4>
  //   <ul className="interviewers__list"></ul>
  // </section>
  // );
};