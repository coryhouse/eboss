import React from "react";

export function CandidateDetails(props) {
  return (
    <>
      <h1>Details</h1>
      {props.match.params.candidateId}
    </>
  );
}
