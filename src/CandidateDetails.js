import React from "react";
import { getCandidateById } from "./api/candidatesApi";

// Exercise 3: Display candidate's name and rank. Hint: use the ID that we're displaying
// Hint: For example: http://localhost:3001/candidates/1 loads candidate with ID 1.
export class CandidateDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      candidate: null,
    };
  }

  async componentDidMount() {
    const candidate = await getCandidateById(
      this.props.match.params.candidateId
    );
    this.setState({ candidate: candidate });
  }

  render() {
    if (this.state.candidate === null) return null;
    return (
      <>
        <h1>Details</h1>
        {this.state.candidate.name}
      </>
    );
  }
}
