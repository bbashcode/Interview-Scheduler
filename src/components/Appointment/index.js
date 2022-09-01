import React from 'react';
import './styles.scss';
import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import Form from './Form';
import Status from './Status';
import Confirm from './Confirm';
import Error from './Error';
import useVisualMode from 'hooks/useVisualMode';

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = 'SAVING';
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";
const ERROR_SAVE = 'ERROR_SAVE'
const ERROR_DELETE = 'ERROR_DELETE'

const { mode, transition, back } = useVisualMode(
  props.interview ? SHOW : EMPTY
);


const Appointment = (props) => { 
  
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    
    bookInterview(id, interview)
      .then(() => transition(SHOW))
      .catch(() => transition(ERROR_SAVE))
  }

  function cancel () {
    transition(DELETING);
    props.cancelInterview(props.id)
    .then(() => transition(EMPTY));
  };

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
      {mode === CREATE && <Form onCancel={() => back(EMPTY)} interviewers={props.interviewers} onSave={save}/>}
      {mode === SAVING && <Status message={"Saving..."}/>}
      {mode === CONFIRM && (
        <Confirm
          onCancel={() => back()}
          onConfirm={cancel}
          message={"Are you sure you would like to delete?"}
        />
      )}
      {mode === EDIT && (
        <Form
          interviewers={props.interview.interviewers}
          onSave={save}
          onCancel={back}
          student={props.interview.student}
          interviewer={props.interview.interviewer.id}
        />
      )}
    </>
  );
};

export default Appointment;