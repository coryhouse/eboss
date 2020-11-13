import { getCandidateWithAverageScore } from "./candidateUtils";

it("should return a candidate object that includes the candidates average score", () => {
  // Arrange
  const candidate = {
    id: 1,
    name: "Cory",
    rank: "Airman",
  };

  const scores = [
    {
      id: 3,
      candidateId: 3,
      value: 10,
    },
    {
      candidateId: 1,
      score: 6,
      id: 4,
    },
    {
      candidateId: 1,
      score: 7,
      id: 5,
    },
  ];

  // Act
  const result = getCandidateWithAverageScore(candidate, scores);

  // Assert
  const expected = {
    id: 1,
    name: "Cory",
    rank: "Airman",
    averageScore: 6.5,
  };
  expect(result).toEqual(expected);
});
