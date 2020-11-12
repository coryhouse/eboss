export async function getCandidateDocs(candidateId) {
  const response = await fetch(
    `http://localhost:3001/candidateDocs?candidateId=${candidateId}`
  );
  if (!response.ok) throw response;
  return response.json(); // this returns a promise.
}
