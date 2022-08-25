import API from "goals-todos-api";

// App Code
export const RECEIVE_DATA = "RECEIVE_DATA";

// action creators
function receiveData(todos, goals) {
  return {
    type: RECEIVE_DATA,
    todos,
    goals,
  };
}

// asynchronous action creators
export function handleInitialData() {
  return (dispatch) => {
    Promise.all([API.fetchTodos(), API.fetchGoals()]).then(([todos, goals]) => {
      dispatch(receiveData(todos, goals));
    });
  };
}
