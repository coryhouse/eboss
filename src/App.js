import React from "react";

export const App = () => {
  const candidates = [
    { name: "Cory", rank: "Airman" },
    { name: "David", rank: "General" },
    { name: "Ann", rank: "Tech Sargent" },
  ];

  // The candidate argument is automatically injected by the map function.
  function renderCandidate(candidate) {
    return (
      <li>
        {candidate.name} - {candidate.rank}
      </li>
    );
  }

  return (
    <>
      <h1>Candidates</h1>
      <ul>{candidates.map(renderCandidate)}</ul>
    </>
  );
};
