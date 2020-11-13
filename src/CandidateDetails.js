import React from "react";
import { getCandidateById } from "./api/candidatesApi";
import { getCandidateDocs } from "./api/candidateDocsApi";
import Button from "./reusable/Button";

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
        <section>
          <h1>Details for {candidate.name}</h1>

          <ul>
            {docs.map((doc) => {
              return <li key={doc.id}>{doc.content}</li>;
            })}
          </ul>
        </section>

        <section>
          <h2>Vote!</h2>
          {ratings.map((rating) => (
            <Button
              aria-label={`Score ${candidate.name} as a ${rating}`}
              key={rating}
              style={{ marginRight: 5 }}
            >
              {rating}
            </Button>
          ))}
        </section>
      </>
    );
  }
}
