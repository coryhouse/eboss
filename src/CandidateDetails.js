import React from "react";
import { getCandidateById } from "./api/candidatesApi";
import { getCandidateDocs } from "./api/candidateDocsApi";

export class CandidateDetails extends React.Component {
  state = {
    candidate: null,
    docs: [],
  };

  async componentDidMount() {
    const { candidateId } = this.props.match.params; // Object destructuring
    const [candidate, docs] = await Promise.all([
      getCandidateById(candidateId),
      getCandidateDocs(candidateId),
    ]);
    // Using Object shorthand syntax because the left and right hand side match
    this.setState({ candidate, docs });
  }

  render() {
    if (this.state.candidate === null) return null;
    return (
      <>
        <h1>Details</h1>
        {this.state.candidate.name}
        <ul>
          {this.state.docs.map((doc) => {
            return <li>{doc.content}</li>;
          })}
        </ul>
      </>
    );
  }
}
