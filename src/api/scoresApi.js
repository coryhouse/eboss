export async function getScores() {
  const response = await fetch("http://localhost:3001/scores");
  if (!response.ok) throw response;
  return response.json(); // this returns a promise.
}

export async function saveScore(candidateId, score) {
  const response = await fetch("http://localhost:3001/scores", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ candidateId, score }),
  });
  if (!response.ok) throw response;
  return response.json(); // this returns a promise.
}
