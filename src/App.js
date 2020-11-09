/**
 * 1. Get candidates from mock API
 * 2. Show a loading indicator (spinner)
 * 3. Handle loading errors
 * 4. Create voting page
 * 4. Configure routes between pages
 * 5. Vote on candidate
 * 6. Display votes on candidates page
 * 7. Styling
 * 8. Using reusable components
 * 9. Keys
 * 10. propTypes
 * 11. Testing
 *
 */

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
      <tr>
        <td>{candidate.name}</td>
        <td>{candidate.rank}</td>
      </tr>
    );
  }

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
        <tbody>{candidates.map(renderCandidate)}</tbody>
      </table>
    </ul>
  );
};
