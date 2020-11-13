export default function candidates(state = [], action) {
  switch (action.type) {
    case "LOAD_CANDIDATES_SUCCESS":
      return action.candidates;
    default:
      return state;
  }
}
