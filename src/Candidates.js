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

export class Candidates extends React.Component {
  constructor(props) {
    super(props); // this must be the first line in every constructor.
    // This declares state to hold candidates in an empty array.
    this.state = {
      candidates: [],
    };
  }

  // Async/await
  async componentDidMount() {
    const candidates = await getCandidates();
    this.setState({ candidates: candidates });
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
            </tr>
          </thead>
          <tbody>{this.state.candidates.map(this.renderCandidate)}</tbody>
        </table>
      </ul>
    );
  }
}
