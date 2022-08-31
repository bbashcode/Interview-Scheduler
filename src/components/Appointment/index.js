import React from 'react';
import './styles.scss';
import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import useVisualMode from 'hooks/useVisualMode';

const EMPTY = "EMPTY";
const SHOW = "SHOW";

const Appointment = (props) => { 
  return(
    <>
      <Header time={props.time} />
      <article className="appointment">
      </article>
      {(props.interview) ? <Show /> : <Empty />}
    </>
  );
};

export default Appointment;