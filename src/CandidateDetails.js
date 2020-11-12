import React from "react";
import { getCandidateById } from "./api/candidatesApi";
import { getCandidateDocs } from "./api/candidateDocsApi";
import { Button } from "./reusable/Button";

const ratings = [6, 7, 8, 9, 10];

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
    const { candidate, docs } = this.state;

    if (candidate === null) return null;
    return (
      <>
        <h1>Details</h1>
        {candidate.name}
        <ul>
          {docs.map((doc) => {
            return <li>{doc.content}</li>;
          })}
        </ul>

        <h2>Vote!</h2>
        {ratings.map((rating) => (
          <Button style={{ marginRight: 5 }}>{rating}</Button>
        ))}
      </>
    );
  }
}
