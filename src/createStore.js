export default function createStore(reducer) {
  let state;

  function dispatch(action) {
    state = reducer(state, action)
  }

  function getState() {
    return state;
  }
}

function render() {
  const container = document.getElementById('container');
}
