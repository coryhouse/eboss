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

export class App extends React.Component {
  constructor(props) {
    super(props); // this must be the first line in every constructor.

    // This declares state to hold candidates in an empty array.
    this.state = {
      candidates: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/candidates")
      .then((response) => {
        if (!response.ok) throw response;
        return response.json();
      })
      .then((candidates) => this.setState({ candidates: candidates }));
  }

  // The candidate argument is automatically injected by the map function.
  renderCandidate(candidate) {
    return (
      <tr>
        <td>{candidate.name}</td>
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
