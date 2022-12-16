const getMetadata = (videos: FetchedYouTubeVideo[]) => {
  return Object.entries(videos).map(([key, value]) => value.fetchedVideo);
};

export { getMetadata };
