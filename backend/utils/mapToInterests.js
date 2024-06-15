const interests = [
  "AI",
  "python",
  "programming",
  "beginner",
  "ML",
  "javascript",
  "web development",
];

export const interestmapper = (questions) => {
  // return a random sized array of interests

  return interests.slice(0, Math.floor(Math.random() * interests.length));
};
