import {
  getCandidateWithAverageScore,
  getAverageFromArray,
} from "./candidateUtils";

describe("getAverageFromArray", () => {
  it("should return the value passed if the array has a single value", () => {
    expect(getAverageFromArray([3])).toEqual(3);
  });
});

describe("getCandidateWithAverageScore", () => {
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

  it("should return a candidate object that includes a null score if no scores exist yet", () => {
    // Arrange
    const candidate = {
      id: 2,
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
      id: 2,
      name: "Cory",
      rank: "Airman",
      averageScore: null,
    };
    expect(result).toEqual(expected);
  });
});
