export function getAppointmentsForDay(state, day) {
  
  const result =[];

  state.days.forEach(element => {
    if(element === day){
      if(id === state.appointments.id){
        result.push(id);
      } else {
        return result;
      }
    } 
  }); 

  return result;
}