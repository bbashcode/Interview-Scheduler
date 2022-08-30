import React from 'react';
import './styles.scss';
import Header from './Header';
import Show from './Show';
import Empty from './Empty';

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