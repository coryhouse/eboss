export function getCandidates() {
  return fetch("http://localhost:3001/candidates").then((response) => {
    if (!response.ok) throw response;
    return response.json();
  });
}
