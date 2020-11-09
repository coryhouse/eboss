// Return a promise that ultimately resolves to an array of candidates
export async function getCandidates() {
  const response = await fetch("http://localhost:3001/candidates");
  if (!response.ok) throw response;
  return response.json(); // this returns a promise.
}

export async function getCandidateById(id) {
  const response = await fetch("http://localhost:3001/candidates/" + id);
  if (!response.ok) throw response;
  return response.json(); // this returns a promise.
}
