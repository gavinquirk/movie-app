const formatImdbId = (imdbId) => {
  // If longer than 7 chars, remove chars from front of string until 7 left
  const length = imdbId.length;
  const trimmedId = imdbId.substring(length - 7);

  return trimmedId;
};

export { formatImdbId };
