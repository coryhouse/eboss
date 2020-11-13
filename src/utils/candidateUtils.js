// Returns a candidate with an averageScore
export function getCandidateWithAverageScore(candidate, scores) {
  const scoresForCandidate = scores
    .filter((s) => s.candidateId === candidate.id)
    .map((s) => s.score);

  return {
    ...candidate,
    averageScore: getAverageFromArray(scoresForCandidate),
  };
}

function getAverageFromArray(array) {
  return array.reduce((a, b) => a + b) / array.length;
}
