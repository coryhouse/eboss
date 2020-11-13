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

export function getAverageFromArray(array) {
  if (!array) return null;
  if (array.length === 0) return null;
  return array.reduce((a, b) => a + b, 0) / array.length;
}
