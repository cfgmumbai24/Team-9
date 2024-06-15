export const allocatementor = (user, users) => {
  const userInterests = user.interests;
  let mentor = null;
  let maxCommonInterests = 0;

  for (let i = 0; i < users.length; i++) {
    const commonInterests = users[i].interests.filter((value) =>
      userInterests.includes(value)
    ).length;

    if (commonInterests > maxCommonInterests) {
      maxCommonInterests = commonInterests;
      mentor = users[i];
    }
  }

  return mentor;
};
