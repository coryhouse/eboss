import React from "react";
import { Candidates } from "./Candidates";
import { CandidateDetails } from "./CandidateDetails";
import { Route, Link } from "react-router-dom";

export function App() {
  return (
    <>
      <Link to="/">Home</Link> | <Link to="/candidates">Candidates</Link>
      <Route path="/" exact>
        <h1>Home</h1>
      </Route>
      <Route path="/candidates">
        <Candidates />
      </Route>
      <Route path="/details/:candidateId" component={CandidateDetails}></Route>
    </>
  );
}
