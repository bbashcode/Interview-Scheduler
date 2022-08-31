import React from 'react';
import './styles.scss';
import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import useVisualMode from 'hooks/useVisualMode';

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";

const { mode, transition, back } = useVisualMode(
  props.interview ? SHOW : EMPTY
);


const Appointment = (props) => { 
  return(
    <>
      <article className="appointment">
      <Header time={props.time} />
      </article>
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      )}
      {mode === CREATE && <Form onCancel={() => back()} interviewers={[]} />}
    </>
  );
};

export default Appointment;