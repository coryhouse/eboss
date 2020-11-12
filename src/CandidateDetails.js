import React from "react";
import { getCandidateById } from "./api/candidatesApi";
import { getCandidateDocs } from "./api/candidateDocsApi";

// Exercise 1: Display candidate docs on this page.
export class CandidateDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      candidate: null,
      docs: [],
    };
  }

  async componentDidMount() {
    const { candidateId } = this.props.match.params; // Object destructuring
    Promise.all([
      getCandidateById(candidateId),
      getCandidateDocs(candidateId),
    ]).then((promises) => {
      const candidate = promises[0];
      const docs = promises[1];
      // Using Object shorthand syntax because the left and right hand side match
      this.setState({ candidate, docs });
    });
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
