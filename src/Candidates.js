/**
 * 1. Integration Testing with Cypress
 * 1. Redux
 * 1. Error handling
 * 1. Show a loading indicator (spinner)
 * 1. Handle loading errors
 * 1. Vote on candidate
 * 1. Display votes on candidates page
 */

import React from "react";
import { Link } from "react-router-dom";
import { getCandidates } from "./api/candidatesApi";
import { getScores } from "./api/scoresApi";
import { getCandidateWithAverageScore } from "./utils/candidateUtils";
import { connect } from "react-redux";
import { loadCandidatesSuccess } from "./redux/actions/candidateActions";
import { bindActionCreators } from "redux";

class Candidates extends React.Component {
  constructor(props) {
    super(props); // this must be the first line in every constructor.
    // This declares state to hold candidates in an empty array.
    this.state = {
      candidates: [],
    };
  }

  // Async/await
  async componentDidMount() {
    const [candidates, scores] = await Promise.all([
      getCandidates(),
      getScores(),
    ]);
    this.props.loadCandidatesSuccess(candidates);
    const candidatesWithScore = candidates.map((c) => {
      return getCandidateWithAverageScore(c, scores);
    });
    this.setState({ candidates: candidatesWithScore });
  }

  // Promise based version
  // componentDidMount() {
  //   getCandidates().then((candidates) => {
  //     this.setState({ candidates: candidates });
  //   });
  // }

  // The candidate argument is automatically injected by the map function.
  renderCandidate(candidate) {
    return (
      <tr key={candidate.id}>
        <td>
          <Link to={"/details/" + candidate.id}>{candidate.name}</Link>
        </td>
        <td>{candidate.rank}</td>
        <td>{candidate.averageScore}</td>
      </tr>
    );
  }

  render() {
    return (
      <ul>
        <h1>Candidates</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Rank</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>{this.state.candidates.map(this.renderCandidate)}</tbody>
        </table>
      </ul>
    );
  }
}

// This function determines what parts of the Redux store are available to this component
function mapStateToProps(state) {
  return {
    candidates: state.candidates,
  };
}

// This function determines what actions are available in our component
// It also wraps each action in a call to dispatch so that Redux is notified when we call the function. (optional)
function mapDispatchToProps(dispatch) {
  return {
    loadCandidatesSuccess: bindActionCreators(loadCandidatesSuccess, dispatch),
  };
}

// Connect our Candidates component to the Redux store and provide the
// props and actions we declared up above in mapStateToProps and mapDispatchToProps.
export default connect(mapStateToProps, mapDispatchToProps)(Candidates);
